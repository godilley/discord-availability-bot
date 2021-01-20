'use strict';

export default class BaseCommand {
    message;
    args;

    constructor() {
        if (new.target === BaseCommand) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
    }
    
    init(message, args) {
        this.message = message;
        this.args = args;
    }

    execute() {
        throw new Error(`${this.constructor.name}() must implement an execute() function`)
    }
}
