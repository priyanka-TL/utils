"use strict";
const correlationId = require(`./correlation-id`)
const winston = require(`winston`)


function createLogger(opts = {}) {
	const { level, getCorrelationId, noCorrelationIdValue = `nocorrelation`,loggerName,disableLog } = opts
	 
	const logger =  winston.createLogger({
		colorize: true,
		silent:disableLog,
		format: winston.format.combine(
			winston.format((info) => {
				info.correlationId = getCorrelationId() || noCorrelationIdValue
				return info
			})(),
			winston.format.timestamp(),
			winston.format.errors({ stack: true }),

			winston.format.printf(({ timestamp, correlationId, level, message }) => {
				console.log(message)
				return `${timestamp}  ${loggerName} (${correlationId}) - ${level}: ${JSON.stringify(message)}`
			})
		),
		level,
		transports: [
			new winston.transports.Console({
				handleExceptions: true,
			}),
			new winston.transports.File({
				filename: loggerName+".log",
				format: winston.format.combine(
					winston.format((info) => {
						info.correlationId = getCorrelationId() || noCorrelationIdValue
						return info
					})(),
					winston.format.timestamp(),
					winston.format.errors({ stack: true }),
					winston.format.printf(({ timestamp, correlationId, level, message }) => {
						return `${timestamp} ${loggerName} (${correlationId}) - ${level}: ${JSON.stringify(message)}`
					})
				),
			}),
		],
		exitOnError: false,
	})

	
		// logger.add(new winston.transports.Console({
		// 	name: 'console.info',
		// 	colorize: true,
		// 	showLevel: true,
		//   format: consoleFormatter,
		// }));
		// logger.transports['console.info'].silent = true

	return logger;
}


let logger = {};
logger.config = (level,loggerName,disableLog) => {
	
	this.level = level;
	this.loggerName = loggerName;
	this.disableLog = disableLog;

};


logger.init = () => createLogger({
	level: this.level || 'info',
	loggerName: this.loggerName || 'elevate',
	disableLog: this.disableLog  || false,
 	getCorrelationId: correlationId.getId
 });

module.exports = logger
