(function () {
    angular
        .module('authApp')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: '../app/login/login.html',
                controller: 'LoginController as login'
            })
    }
})();
