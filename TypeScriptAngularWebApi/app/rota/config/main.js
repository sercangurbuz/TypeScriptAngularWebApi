require.config({
    baseUrl: 'app',
    paths: {
        'jquery': 'Scripts/jquery-2.1.4',
        'toastr': 'Scripts/toastr',
        'angular': 'Scripts/angular',
        'angular-ui-router': 'Scripts/angular-ui-router',
        'core': 'rota/core'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        toastr: {
            deps: ['jquery']
        },
        angular: {
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: ['angular']
        }
    }
});
require(['startup'], function (startup) {
    startup.init();
});
//# sourceMappingURL=main.js.map