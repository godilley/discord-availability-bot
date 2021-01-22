'use strict';

import winston from "winston";

export default class Logger {
    #logger;

    constructor() {
        this.#logger = winston.createLogger({
            level: 'info',
            format: winston.format.json(),
            defaultMeta: { service: 'user-service' },
            transports: [
                //
                // - Write all logs with level `error` and below to `error.log`
                // - Write all logs with level `info` and below to `combined.log`
                //
                new winston.transports.File({ filename: 'log/error.log', level: 'error' }),
                new winston.transports.File({ filename: 'log/combined.log' }),
            ],
        });

        if (process.env.NODE_ENV !== 'production') {
            this.#logger.add(new winston.transports.Console({
                format: winston.format.simple(),
            }));
        }
    }

    log(level, message) {
        this.#logger.log({
            level: level,
            message: message
        })
    }
    
    info(message) {
        this.log('info', message);
    }
}
