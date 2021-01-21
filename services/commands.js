'use strict';

import BaseCommand from "./commands/baseCommand.js";
import Create from "./commands/create.js";
import Help from "./commands/help.js";

export default class Commands {
    #discordClient;
    #commandPrefix;

    constructor(discordClient, commandPrefix) {
        this.#discordClient = discordClient;
        this.#commandPrefix = commandPrefix;

        discordClient.on('message', message => {
            if (message.author.bot) return;
            if (!message.content.startsWith(this.#commandPrefix)) return;

            const commandBody = message.content.slice(this.#commandPrefix.length + 1);
            const args = commandBody.split(' ');
            const command = args.shift().toLowerCase();
            
            if (this.validCommands().indexOf(command) === -1) {
                this.handleInvalidUsage(message);
                return;
            }
            
            let commandClass = null;
            
            switch (command) {
                case 'create': {
                    commandClass = new Create();
                    break;
                }
                case 'help': {
                    commandClass = new Help();
                    break;
                }
            }

            console.log("command:", command, "args: ", args);
            if (!(commandClass instanceof BaseCommand)) {
                this.handleCommandError(message);
                return;
            }

            commandClass.init(message, args);
            commandClass.execute();
        })
    }

    handleInvalidUsage(message) {
        message.reply(`Invalid command. Type ${this.#commandPrefix} help for commands and command usage.`)
    }

    handleCommandError(message) {
        message.reply(`There was an error executing this command. Please report this as a bug on the github tracker.`)
    }

    validCommands() {
        return [
            'create',
            'help',
        ];
    }
}
