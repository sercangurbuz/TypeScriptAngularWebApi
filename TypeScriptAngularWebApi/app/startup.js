define(["require", "exports", "./rota/config/app"], function (require, exports, app_1) {
    //Config phase
    app_1.App.configure(["ConfigProvider", function (config) {
            config.configure({
                baseUrl: "http://localhost:17637/api/"
            });
        }]);
    //Run phase
    app_1.App.run(["Routing", "Config", function (routing, config) {
            routing.addState({
                name: 'todos',
                controller: 'todoController',
                templateUrl: 'app/cars/todos.html',
                url: '/todos'
            });
            routing.go("todos");
        }]);
});
//# sourceMappingURL=startup.js.map