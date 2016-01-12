import "./infrastructure.index"
import Basecontroller = require("../base/basecontroller");

export interface IRotaApp {
    rotaModule: ng.IModule;
    addController(controllerName: string, controller: typeof Basecontroller.BaseController, dependencies?: string[]): void;
    configure(fn: Function): IRotaApp;
    configure(fn: any[]): IRotaApp;
    run(fn: Function): IRotaApp;
    run(fn: any[]): IRotaApp;
}

class RotaApp implements IRotaApp {
    rotaModule: angular.IModule;
    private controllerProvider: angular.IControllerProvider;

    constructor(moduleName: string) {
        this.rotaModule = angular.module(moduleName, ["rota"]);
        //
        var self = this;
        this.configure(($controllerProvider: ng.IControllerProvider) => {
            self.controllerProvider = $controllerProvider;
        });
    }

    addController(controllerName: string, controller: typeof Basecontroller.BaseController, dependencies?: string[]): void {
        //Built-in dependencies - Ek dependencies ile birleştiriliyor
        const deps: any[] = ['$rootScope', '$scope', '$q', '$http'].concat(dependencies || []);
        const controllerCtor: Function = (...args: any[]): Basecontroller.IBaseController => {
            var bundle: { [s: string]: any; } = {
                '$rootScope': args[0],
                '$scope': args[1],
                '$q': args[2],
                '$http': args[3]
            }

            var instance: Basecontroller.IBaseController = new controller(bundle);
            //Instance'i dondur
            return instance;
        }; //Fonksiyonu son obje olarak dizinin sonuna ekle
        deps.push(controllerCtor);
        //Register et
        this.controllerProvider.register(controllerName, deps);
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

var rotaApp: IRotaApp = new RotaApp("rota-app");
export default rotaApp;
