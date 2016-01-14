﻿import "./infrastructure.index"
import {BaseController, IBaseController} from "../base/basecontroller";
import {IBaseApi, BaseApi} from "../base/baseapi";

interface IRotaApp {
    rotaModule: ng.IModule;
    addController(controllerName: string, controller: typeof BaseController, dependencies?: string[]): void;
    addApi(apiName: string, api: typeof BaseApi, dependencies?: string[]): void ;
    configure(fn: Function): IRotaApp;
    configure(fn: any[]): IRotaApp;
    run(fn: Function): IRotaApp;
    run(fn: any[]): IRotaApp;
}

class RotaApp implements IRotaApp {
    rotaModule: angular.IModule;
    private controllerProvider: angular.IControllerProvider;
    private provideService: angular.auto.IProvideService;

    constructor(moduleName: string) {
        this.rotaModule = angular.module(moduleName, ["rota"]);
        
        //TODO:annotation injection
        this.configure(($controllerProvider: ng.IControllerProvider, $provide: angular.auto.IProvideService) => {
            this.controllerProvider = $controllerProvider;
            this.provideService = $provide;
        });
    }

    addController(controllerName: string, controller: typeof BaseController, dependencies?: string[]): void {
        //Built-in dependencies - Ek dependencies ile birleştiriliyor
        const deps: any[] = ['$rootScope', '$scope', '$q', '$http', 'Logger'].concat(dependencies || []);
        const controllerCtor: Function = (...args: any[]): IBaseController => {
            var bundle: { [s: string]: any; } = {
                '$rootScope': args[0],
                '$scope': args[1],
                '$q': args[2],
                '$http': args[3],
                'logger': args[4]
            }

            var instance: IBaseController = new controller(bundle);
            //Instance'i dondur
            return instance;
        }; //Fonksiyonu son obje olarak dizinin sonuna ekle
        deps.push(controllerCtor);
        //Register et
        this.controllerProvider.register(controllerName, deps);
    }

    addApi(apiName: string, api: typeof BaseApi, dependencies?: string[]): void {
        //Built-in dependencies - Ek dependencies ile birleştiriliyor
        const deps: any[] = ['$rootScope', '$q', '$http'].concat(dependencies || []);
        const apiCtor: Function = (...args: any[]): IBaseApi => {
            var bundle: { [s: string]: any; } = {
                '$rootScope': args[0],
                '$q': args[1],
                '$http': args[2]
            }

            var instance: IBaseApi = new api(bundle);
            //Instance'i dondur
            return instance;
        }; //Fonksiyonu son obje olarak dizinin sonuna ekle
        deps.push(apiCtor);
        //Register et
        this.provideService.service(apiName, deps);
    }

    configure(fn: any): IRotaApp {
        this.rotaModule.config(fn);
        return this;
    }

    run(fn: any): IRotaApp {
        this.rotaModule.run(fn);
        return this;
    }
}
//Instance of rota app
var rotaApp: IRotaApp = new RotaApp("rota-app");
//Export
export {IRotaApp, rotaApp as App}
