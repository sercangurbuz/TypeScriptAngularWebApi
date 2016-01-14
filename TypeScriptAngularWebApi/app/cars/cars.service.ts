import { App } from "app/rota/config/app";
import { IBaseApi, BaseApi } from "app/rota/base/baseapi";
import {ICarModel}  from "cars.models";

export interface ICarsApi extends IBaseApi {
    getCars(): ng.IPromise<ICarModel>
}

class CarsApi extends BaseApi implements ICarsApi {
    getCars(): angular.IPromise<ICarModel> {
        return this.get<ICarModel>("cars");
    }
}

App.addApi("carsApi", CarsApi);