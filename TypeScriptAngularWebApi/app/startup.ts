import { App } from "./rota/config/app";
import {RoutingService, IRouting} from "./rota/services/routing";
import {IMainConfig} from "./rota/config/config";
import { IBaseConfigProvider } from "./rota/base/baseconfig";

//Config phase
App.configure(["ConfigProvider", (config: IBaseConfigProvider<IMainConfig>) => {
    config.configure({
        baseUrl: "http://localhost:32368"
    });
}]);
//Run phase
App.run(["Routing", "Config", (routing: IRouting, config: IMainConfig) => {

    routing.addState({
        name: 'cars',
        controller: 'carsController',
        templateUrl: 'app/cars/cars.html',
        url: '/cars'
    });


    var ss = config.baseUrl;
    routing.go("cars");
}]);
