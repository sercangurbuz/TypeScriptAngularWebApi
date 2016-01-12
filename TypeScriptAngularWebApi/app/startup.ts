import { default as App } from './rota/config/app';
import Routing = require("./rota/services/routing");

App.run(["Routing", (routing: Routing.IRouting) => {

    routing.addState({
        name: 'shell',
        controller: './app/cars/'
    });

}]);
