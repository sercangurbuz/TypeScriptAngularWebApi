import BaseModels = require("../rota/base/basemodels");

export interface ITodoModel extends BaseModels.IBaseModel {
    text: string;
    done: boolean;
}