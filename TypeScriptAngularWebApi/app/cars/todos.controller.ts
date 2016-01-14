import {App} from "app/rota/config/app";
import {BaseCrudController} from "app/rota/base/basecrudcontroller";
import {ITodoModel} from "./todos.models";
import {ITodoApi} from "./todos.service";
import "./todos.service";

class TodoController extends BaseCrudController<ITodoModel> {
    todoApi: ITodoApi;

    constructor(bundle: { [s: string]: any; }, todoApi: ITodoApi) {
        this.todoApi = todoApi;
        super(bundle);
    }

    getModel(): ng.IPromise<ITodoModel> {
        return this.todoApi.getTodos();
    }
}

App.addController("todoController", TodoController, ["todoApi"]);