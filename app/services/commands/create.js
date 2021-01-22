'use strict';

import BaseCommand from "./baseCommand.js";
import {MessageEmbed} from "discord.js";

export default class Create extends BaseCommand {
    constructor() {
        super();
    }

    execute() {
        const embed = new MessageEmbed()
            // Set the title of the field
            .setTitle('A slick little embed')
            // Set the color of the embed
            .setColor(0xff0000)
            // Set the main content of the embed
            .setDescription('Hello, this is a slick embed!')
        ;

        // Send the embed to the same channel as the message
        this.message.channel.send(embed);
    }
}
