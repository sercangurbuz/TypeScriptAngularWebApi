interface IBaseApi {
    $rootScope: ng.IRootScopeService;
    $q: angular.IQService;
    $http: ng.IHttpService;
}

class BaseApi implements IBaseApi {
    $rootScope: ng.IRootScopeService;
    $q: angular.IQService;
    $http: ng.IHttpService;

    constructor(bundle: { [s: string]: any; }) {
        this.initBundle(bundle);
    }

    initBundle(bundle: { [s: string]: any; }): void {
        this.$rootScope = bundle['$rootScope'];
        this.$q = bundle['$q'];
        this.$http = bundle['$http'];
    }
}

export {BaseApi, IBaseApi}