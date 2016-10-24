(function () {
    angular
        .module('authApp')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider
            .state('how-it-works', {
                url: '/how-it-works',
                templateUrl: '../app/how-it-works/how-it-works.html',
                controller: 'HowItWorksController as howitworks'
            })
    }
})();
