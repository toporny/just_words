(function () {
    angular
        .module('authApp')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider
            .state('learn-yourself', {
                url: '/learn-yourself',
                templateUrl: '../app/learn-yourself/learn-yourself.html',
                controller: 'LearnYourselfController as learnyourself'
            })
    }
})();
