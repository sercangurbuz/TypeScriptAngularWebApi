interface IBaseModel {
    id: number;
}

interface IBaseCrudModel extends IBaseModel {
}

interface IBaseListModel<TModel extends IBaseModel> {
    [index: number]: TModel
}

export {IBaseModel, IBaseListModel, IBaseCrudModel}