import { IBaseConfig, BaseConfig } from "../base/baseconfig";


export interface IMainConfig extends IBaseConfig {
    baseUrl: string;
}

export class Config extends BaseConfig<IMainConfig> {
}

//#region Register
var module: ng.IModule = angular.module('rota.config', []);
module.provider('Config', Config);
//#endregion
