import Logger = require("../services/logger");


export interface IBaseController {
    goBack(): void;
}

export class BaseController implements IBaseController {
    logger: Logger.ILogger;
    $rootScope: ng.IRootScopeService;
    $q: angular.IQService;
    $http: ng.IHttpService;
    $scope: ng.IScope;

    constructor(bundle: { [s: string]: any; }) {
        this.initBundle(bundle);
    }

    initBundle(bundle: { [s: string]: any; }): void {
        this.$rootScope = bundle['$rootScope'];
        this.$q = bundle['$q'];
        this.$scope = bundle['$scope'];
        this.$http = bundle['$http'];
    }

    goBack(): void {

    }

}
