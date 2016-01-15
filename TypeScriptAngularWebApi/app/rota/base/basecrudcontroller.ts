import {IBaseModelController, BaseModelController, IBundle} from "./basemodelcontroller"
import {IBaseCrudModel} from "./basemodels"


interface IBaseCrudController<TModel extends IBaseCrudModel> extends IBaseModelController<TModel> {
    save(): ng.IPromise<TModel>;
    delete(): ng.IPromise<any>;
    add(model: TModel): void;
    getModel(): ng.IPromise<TModel>;
}


class BaseCrudController<TModel extends IBaseCrudModel> extends BaseModelController<TModel> implements IBaseCrudController<TModel> {
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

    getModel(): ng.IPromise<TModel> { throw new Error("Not implemented"); }
}
//Export
export {IBaseCrudController, BaseCrudController, IBundle}