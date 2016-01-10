import Basecontroller = require("basecontroller");

export interface IBaseModel {
}

export interface IBaseCrudController<TModel extends IBaseModel> extends Basecontroller.IBaseController {
    goBack(): void;
    save(): ng.IPromise<TModel>;
    delete(): ng.IPromise<any>;
    add(model: TModel): void;
}

export class BaseCrudController<TModel> extends Basecontroller.BaseController implements IBaseCrudController {
    constructor() {
        super();
    }

    goBack(): void {

    }
}
