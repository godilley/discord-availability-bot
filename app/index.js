'use strict';

import Logger from "./services/logger.js";
import Commands from "./services/commands.js";

import Discord from "discord.js";
import config from "./config.js";
import Database from "./services/database.js";

const logger = new Logger();

const client = new Discord.Client();
client.login(config.BOT_TOKEN).then(r => logger.info('Successfully authenticated with the Discord bot'));

const database = new Database(logger, config.DB_HOST, config.DB_NAME, config.DB_USER, config.DB_PASS);

const commands = new Commands(client, config.COMMAND_PREFIX)
