(function () {
    angular
        .module('authApp')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider
            .state('users', {
                url: '/users',
                templateUrl: '../app/dashboard/user.html',
                controller: 'UserController as user'
            })
    }
})();
