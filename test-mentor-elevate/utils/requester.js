const http = require('http')
const https = require('https')
const { matchPathsAndExtractParams } = require('./patternMatcher')
const routesConfig = require('../constants/routes')
const { pathParamSetter } = require('./pathParamSetter')
const axios = require('axios')
const fetch = require('node-fetch')

const handleInterfaceError = (res, err) => {
	console.log('Error: ', err)
	res.writeHead(500, { 'Content-Type': 'text/plain' })
	res.end('Interface Server Error')
}

const passThroughRequester = async (req, res) => {
	try {
		const sourceBaseUrl = req.protocol + '://' + req.headers.host + '/'
		const sourceUrl = new URL(req.originalUrl, sourceBaseUrl)
		const route = routesConfig.routes.find((route) => route.sourceRoute === req.sourceRoute)
		const params = matchPathsAndExtractParams(route.sourceRoute, req.originalUrl)
		const targetRoute = pathParamSetter(route.targetRoute.path, params)
		const parsedUrl = new URL(targetRoute, req.baseUrl)
		const options = {
			method: req.method,
			headers: req.headers,
			hostname: parsedUrl.hostname,
			port: parsedUrl.port,
			path: parsedUrl.pathname + sourceUrl.search,
		}
		console.log({
			sourceBaseUrl,
			sourceUrl,
			route,
			params,
			targetRoute,
			parsedUrl,
			options,
		})
		const proxyReq = (parsedUrl.protocol === 'https:' ? https : http).request(options, (proxyRes) => {
			res.writeHead(proxyRes.statusCode, proxyRes.headers)
			proxyRes.pipe(res, { end: true })
		})
		proxyReq.on('error', (err) => {
			handleInterfaceError(res, err)
		})
		req.pipe(proxyReq, { end: true })
	} catch (err) {
		handleInterfaceError(res, err)
	}
}

const post = (baseUrl, route, requestBody, headers) => {
	try {
		const url = baseUrl + route
		return axios
			.post(url, requestBody, { headers })
			.then((response) => response.data)
			.catch((error) => {
				if (error.response) {
					return error.response
				}
				return error
			})
	} catch (err) {
		console.log(err)
	}
}
const patch = async (baseUrl, route, requestBody, headers) => {
	try {
		const url = baseUrl + route

		const options = {
			method: 'PATCH',
			headers: headers,
			body: JSON.stringify(requestBody), // Assuming requestBody is an object
		}

		const response = await fetch(url, options)

		const data = await response.json()
		return data
	} catch (error) {
		console.error(error)
		throw error // Re-throw the error to be caught by the caller
	}
}

const requesters = {
	passThroughRequester,
	post,
	patch,
}

module.exports = requesters
