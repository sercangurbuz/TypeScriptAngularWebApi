import { App } from "./rota/config/app";
import {RoutingService, IRouting} from "./rota/services/routing";
import {IMainConfig} from "./rota/config/config";
import { IBaseConfigProvider } from "./rota/base/baseconfig";

//Config phase
App.configure(["ConfigProvider", (config: IBaseConfigProvider<IMainConfig>) => {
    config.configure({
        baseUrl: "http://localhost:17637/api/"
    });
}]);
//Run phase
App.run(["Routing", "Config", (routing: IRouting, config: IMainConfig) => {

    routing.addState({
        name: 'todos',
        controller: 'todoController',
        templateUrl: 'app/cars/todos.html',
        url: '/todos'
    });

    routing.go("todos");
}]);
