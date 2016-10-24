(function () {
    angular
        .module('authApp')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider
            .state('test-yourself', {
                url: '/test-yourself',
                templateUrl: '../app/test-yourself/test-yourself.html',
                controller: 'TestYourselfController as testyourself'
            })
    }
})();
