const { Kafka } = require('kafkajs')

class ElevateKafka {
	constructor(clientId, brokers, { connectionTimeout, initialRetryTime, retries, packageName } = {}) {
		if (!clientId) throw new Error('clientId is required')
		if (!brokers) throw new Error('brokers are required')

		this.clientId = clientId
		this.brokers = brokers.split(',')
		this.packageName = packageName || 'Unnamed Package'

		try {
			this.kafkaClient = new Kafka({
				clientId: this.clientId,
				brokers: this.brokers,
				connectionTimeout: connectionTimeout || 60000,
				retry: {
					initialRetryTime: initialRetryTime || 1000,
					retries: retries || 8,
				},
			})
		} catch (error) {
			console.error(`Failed to create Kafka client: ${error.message}`)
			throw error
		}

		this.producer = null
		this.consumers = new Map()
	}

	async #createProducer() {
		if (!this.producer) {
			try {
				this.producer = this.kafkaClient.producer()
				await this.producer.connect()
				this.producer.on('producer.connect', () =>
					console.log(`Kafka Producer Connected - ${this.packageName}`)
				)
				this.producer.on('producer.disconnect', () => {
					console.log(`Kafka Producer Disconnected - ${this.packageName}`)
					this.producer = null
				})
			} catch (error) {
				console.error(`Failed to connect producer: ${error.message}`)
				throw error
			}
		}
	}

	async #sendMessage(topic, key, value) {
		if (!topic || !key || !value) {
			throw new Error('Topic, key, and value are required to send a message')
		}
		try {
			const res = await this.producer.send({
				topic,
				messages: [
					{
						key,
						value: JSON.stringify(value),
					},
				],
			})
			console.log(`${topic.toUpperCase()} Enqueued`)
			return res
		} catch (error) {
			console.error(`Failed to send message: ${error.message}`)
			throw error
		}
	}

	async enqueueMessage(topic, key, value) {
		await this.#createProducer()
		return await this.#sendMessage(topic, key, value)
	}

	enqueueMessageWithTopic(topic) {
		return async (key, value) => {
			await this.#createProducer()
			return await this.#sendMessage(topic, key, value)
		}
	}

	async createConsumer(groupId, topics) {
		if (this.consumers.has(groupId)) throw new Error('Consumer With Specified GroupId Exist For This Instance')
		const consumer = this.kafkaClient.consumer({ groupId })
		this.consumers.set(groupId, consumer)
		consumer.on('consumer.connect', () => console.log('Kafka Consumer Connected'))
		consumer.on('consumer.disconnect', () => {
			console.log('Kafka Consumer Disconnected')
			this.consumers.delete(groupId)
		})
		await consumer.connect()
		await consumer.subscribe({ topics })
		return consumer
	}

	async runConsumer(
		consumer,
		messageProcessorFn = (topic, message) => {
			console.log({ topic, message })
		}
	) {
		try {
			await consumer.run({
				eachMessage: async ({ topic, message }) => messageProcessorFn(topic, message),
			})
		} catch (err) {
			console.log(err)
		}
	}
}

module.exports = ElevateKafka
