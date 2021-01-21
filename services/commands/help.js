'use strict';

import BaseCommand from "./baseCommand.js";
import {MessageEmbed} from "discord.js";

export default class Help extends BaseCommand {
    constructor() {
        super();
    }

    execute() {
        const embed = new MessageEmbed()
            // Set the title of the field
            .setTitle('Command Usage:')
            // Set the color of the embed
            .setColor(0xFF8200)
            // Set the main content of the embed
            .setDescription([
                '// WIP',
                '// TODO',
            ])
        ;

        // Send the embed to the same channel as the message
        this.message.channel.send(embed);
    }
}
