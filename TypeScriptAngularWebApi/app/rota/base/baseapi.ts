import {Config}  from "../config/config";

interface IBaseApi {
    $rootScope: ng.IRootScopeService;
    $q: angular.IQService;
    $http: ng.IHttpService;
    config: Config;
    get<T>(url: string, params?: any): angular.IPromise<any>;
}

class BaseApi implements IBaseApi {
    $rootScope: ng.IRootScopeService;
    $q: angular.IQService;
    $http: ng.IHttpService;

    config: Config;

    constructor(bundle: { [s: string]: any; }, ...args: any[]) {
        this.initBundle(bundle);
    }

    initBundle(bundle: { [s: string]: any; }): void {
        this.$rootScope = bundle['$rootScope'];
        this.$q = bundle['$q'];
        this.$http = bundle['$http'];
        this.config = bundle['config'];
    }

    get<T>(url: string, params?: any): angular.IPromise<any> {
        return this.$http.get(this.config.config.baseUrl + url, params)
            .then((response: ng.IHttpPromiseCallbackArg<T>): T=> {
                return response.data;
            });
    }
}

export {BaseApi, IBaseApi}