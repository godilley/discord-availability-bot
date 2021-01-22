'use strict';

import {Sequelize} from "sequelize";

export default class Database {
    #sequelize;
    #logger;

    constructor(logger, host, database, user, password) {
        this.#logger = logger;
        this.#sequelize = new Sequelize(database, user, password, {
            host: host,
            dialect: 'mariadb',
            dialectOptions: {
                // Your mariadb options here
                // connectTimeout: 1000
            }
        });

        this.testConnection();
    }

    testConnection() {
        try {
            this.#sequelize.authenticate();
            this.#logger.info('Database connection has been established successfully.');
        } catch (error) {
            this.#logger.error('Unable to connect to the database:', error);
        }
    }
}
