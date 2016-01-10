import {app} from "rota/config/app";

export class Startup {

    static init(): void {
        Startup.registerStates();
    }

    static registerStates(): void {
        console.log('reggistiretion started');
    }
}

