/**
 * name : index.js
 * author : Vishnu
 * created-date : 25-june-2025
 * Description : Health check functionality for various services.
 */

const { v1: uuidv1 } = require('uuid');
const mongodb = require('./services/mongodb');
const kafka = require('./services/kafka');
const httpService = require('./services/httpService');

async function healthCheckHandler(config) {
	const checks = [];
	
	if (config.checks.mongodb?.enabled) {
		const healthy = await mongodb.check(config.checks.mongodb.url);
		checks.push(serviceResult('MongoDB', healthy));
	}
	
	if (config.checks.kafka?.enabled) {
		const healthy = await kafka.check(config.checks.kafka.url);
		checks.push(serviceResult('Kafka', healthy));
	}

	if (Array.isArray(config.checks.microservices)) {
		for (let ms of config.checks.microservices) {
			if (!ms.enabled) continue;
			const healthy = await httpService.check(ms);
			checks.push(serviceResult(ms.name, healthy));
		}
	}

	const failed = checks.filter((s) => !s.healthy);

	const result = {
		name: config.name,
		version: config.version,
		healthy: failed.length === 0,
		checks
	};

	return formatResponse(result);
}

function serviceResult(name, healthy) {
	return {
		name,
		healthy,
		err: healthy ? '' : `${name.toUpperCase()}_HEALTH_FAILED`,
		errMsg: healthy ? '' : `${name} is not healthy`
	};
}

function formatResponse(result) {
	return {
		id: 'service.health.api',
		ver: '1.0',
		ts: new Date(),
		params: {
			resmsgid: uuidv1(),
			msgid: uuidv1(),
			status: 'successful',
			err: null,
			errMsg: null
		},
		status: 200,
		result
	};
}

module.exports = {
	healthCheckHandler
};
