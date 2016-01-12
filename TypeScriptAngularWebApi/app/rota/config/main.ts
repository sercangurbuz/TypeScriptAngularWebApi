require.config({
    //baseUrl: '.',

    paths: {
        //'jquery': 'Scripts/jquery-2.1.4',
        //'toastr': 'Scripts/toastr',
        'angular': '../core/angular',
        'angular-ui-router': '../core/angular-ui-router'
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

require(['./vendor.index'], (): void  => {
    require(['../../startup'], (): void => {
        //Tum rota dosyalari yuklendiktan sonra angulari başlatiyoruz
        angular.element(document).ready(() => {
            angular.bootstrap(document, ['rota-app']);
        });
    });
});