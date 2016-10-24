// public/scripts/loginController.js

(function() {

    'use strict';

    angular
        .module('authApp')
        .controller('LoginController', LoginController);


    function LoginController($auth, $state) {

        var vm = this;
            
        vm.login = function() {

            var credentials = {
                email: vm.email,
                password: vm.password
            }
            
            // Use Satellizer's $auth service to login
            $auth.login(credentials).then(function(data) {

                // If login is successful, redirect to the users state
                $state.go('users', {});
            });
        }

    }

})();