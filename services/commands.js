'use strict';

import Create from "./commands/create.js";
import BaseCommand from "./commands/baseCommand.js";

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
            
            let commandClass = null;
            
            switch (command) {
                case 'create': {
                    commandClass = new Create();
                    break;
                }
            }

            if (commandClass instanceof BaseCommand) {
                commandClass.init(message, args);
                commandClass.execute();
            }

            console.log("command:", command, "args: ", args);
        })
    }
}
