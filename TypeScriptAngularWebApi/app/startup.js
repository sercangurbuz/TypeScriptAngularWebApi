define(["require", "exports", "./rota/config/app"], function (require, exports, app_1) {
    //Config phase
    app_1.App.configure(["ConfigProvider", function (config) {
            config.configure({
                baseUrl: "http://localhost:17637/api/"
            });
        }]);
    //Run phase
    app_1.App.run(["Routing", function (routing) {
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
});
//# sourceMappingURL=startup.js.map