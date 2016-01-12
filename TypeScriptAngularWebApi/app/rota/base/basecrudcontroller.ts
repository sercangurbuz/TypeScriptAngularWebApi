import Basecontroller = require("./basecontroller");
import BaseModels = require("./basemodels");

export interface IBaseCrudController<TModel extends BaseModels.IBaseModel> extends Basecontroller.IBaseController {
    model: TModel;
    goBack(): void;
    save(): ng.IPromise<TModel>;
    delete(): ng.IPromise<any>;
    add(model: TModel): void;
    getModel(): ng.IPromise<TModel>;
}

export class BaseCrudController<TModel extends BaseModels.IBaseModel> extends
    Basecontroller.BaseController implements IBaseCrudController<TModel> {
    model: TModel = null;

    constructor(bundle: { [s: string]: any; }) {
        super(bundle);
    }

    //#region IBaseController
    goBack(): void {
    }
    //#endregion

    //#region IBaseCrudController
    save(): ng.IPromise<TModel> {
        this.logger.log("saving");
        return this.$q.when(null);
    }

    delete(): ng.IPromise<any> {
        this.logger.log("deleting");
        return this.$q.when(null);
    }

    add(model: TModel): void {
        this.logger.log("adding");
    }
    //#endregion
    getModel(): ng.IPromise<TModel> {
        this.logger.log("deleting");
        return this.$q.when(null);
    }
}
