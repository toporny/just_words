(function () {
    angular
        .module('authApp')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider
            .state('select-words', {
                url: '/select-words',
                templateUrl: '../app/select-words/select-words.html',
                controller: 'SelectWordsController as selectwords'
            })
    }
})();
