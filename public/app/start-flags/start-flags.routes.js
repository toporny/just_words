(function () {
    angular
        .module('authApp')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider
            .state('start-flags', {
                url: '/start-flags',
                templateUrl: '../app/start-flags/start-flags.html',
                controller: 'startFlagsController as startflags'
            })
    }
})();
