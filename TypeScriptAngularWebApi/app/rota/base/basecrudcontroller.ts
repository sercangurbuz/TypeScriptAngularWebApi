import {IBaseController, BaseController} from "./basecontroller"
import {IBaseModel} from "./basemodels"


interface IBaseCrudController<TModel extends IBaseModel> extends IBaseController {
    model: TModel;
    goBack(): void;
    save(): ng.IPromise<TModel>;
    delete(): ng.IPromise<any>;
    add(model: TModel): void;
    getModel(): ng.IPromise<TModel>;
}

class BaseCrudController<TModel extends IBaseModel> extends BaseController implements IBaseCrudController<TModel> {
    private _model: TModel = null;

    get model(): TModel { return this._model; }
    set model(value: TModel) { this._model = value; }

    constructor(bundle: { [s: string]: any; }) {
        super(bundle);
        this.initModel();
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

    initModel() {
        var resultP = this.getModel();
        return resultP.then((response: ng.IHttpPromiseCallbackArg<TModel>): TModel => {
            return this.model = <TModel>response.data;
        });
    }
}
//Export
export {IBaseCrudController, BaseCrudController}