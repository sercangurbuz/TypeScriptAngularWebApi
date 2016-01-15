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
App.run(["Routing", (routing: IRouting) => {

    routing.addStates([{
        name: 'todos',
        controller: 'todosController',
        templateUrl: 'app/todo/todos.html',
        url: '/todos'
    }, {
            name: 'todo',
            controller: 'todoController',
            templateUrl: 'app/todo/todo.html',
            url: '/todos/:id'
        }]).go("todos");
}]);
