import {Logger, ILogger} from "../services/logger";

interface IBaseController {
    $rootScope: ng.IRootScopeService;
    $q: angular.IQService;
    $http: ng.IHttpService;
    $scope: ng.IScope;
    logger: ILogger;

    goBack(): void;
}

class BaseController implements IBaseController {
    $rootScope: ng.IRootScopeService;
    $q: angular.IQService;
    $http: ng.IHttpService;
    $scope: ng.IScope;
    logger: ILogger;

    constructor(bundle: { [s: string]: any; }, ...args: any[]) {
        this.initBundle(bundle);
    }

    initBundle(bundle: { [s: string]: any; }): void {
        this.$rootScope = bundle['$rootScope'];
        this.$q = bundle['$q'];
        this.$scope = bundle['$scope'];
        this.$http = bundle['$http'];
        this.logger = bundle["logger"];
    }

    goBack(): void {

    }
}
//Export
export {IBaseController, BaseController}
