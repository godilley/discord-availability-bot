'use strict';

import Logger from "./services/logger.js";
import Commands from "./services/commands.js";

import Discord from "discord.js";
import config from "./config.js";

const logger = new Logger();

const client = new Discord.Client();
client.login(config.BOT_TOKEN).then(r => logger.info('Successfully authenticated with the Discord bot'));

const commands = new Commands(client, config.COMMAND_PREFIX)
