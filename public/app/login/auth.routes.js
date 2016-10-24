(function () {
    angular
        .module('authApp')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider
            .state('auth', {
                url: '/auth',
                templateUrl: '../app/login/auth.html',
                controller: 'AuthController as auth'
            })
    }
})();
