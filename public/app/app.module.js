(function() {

    'use strict';

    angular
        .module('authApp', ['ui.router', 'satellizer'])
        .config(function($stateProvider, $urlRouterProvider, $authProvider) {

            // Satellizer configuration that specifies which API
            // route the JWT should be retrieved from
            $authProvider.loginUrl = '/api/authenticate';

            // Redirect to the auth state if any other states
            // are requested other than users
            $urlRouterProvider.otherwise('/auth');
            
            $stateProvider
                .state('users', {

                .state('auth', {
                    url: '/auth',
                    templateUrl: '../app/login/login.html',
                    controller: 'LoginController as login'
                })
                .state('users', {
                    url: '/users',
                    templateUrl: '../app/dashboard/dashboard.html',
                    controller: 'DashboardController as dashboard'
                });
        });
})();