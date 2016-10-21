(function () {
    angular
        .module('authApp')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider
            .state('challenge-somebody', {
                url: '/challenge-somebody',
                templateUrl: '../app/challenge-somebody/challenge-somebody.html',
                controller: 'challengeSomebodyController as challengesomebody'
            })
    }
})();
