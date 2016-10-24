<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Angular-Laravel Authentication</title>
        <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css">
    </head>
    <body ng-app="authApp">

        <div class="container">
            <div ui-view></div>
        </div>        

    </body>

    <!-- Application Dependencies -->
    <script src="node_modules/angular/angular.js"></script>
    <script src="node_modules/angular-ui-router/release/angular-ui-router.js"></script>
    <script src="node_modules/satellizer/dist/satellizer.js"></script>

    <!-- Application Scripts -->
    <script src="app/app.module.js"></script>

    <script src="app/dashboard/user.controller.js"></script>
    <script src="app/dashboard/user.routes.js"></script>

    <script src="app/login/login.controller.js"></script>
    <script src="app/login/login.routes.js"></script>

    <script src="app/how-it-works/how-it-works.controller.js"></script>
    <script src="app/how-it-works/how-it-works.routes.js"></script>

    <script src="app/select-words/select-words.controller.js"></script>
    <script src="app/select-words/select-words.routes.js"></script>

    <script src="app/learn-yourself/learn-yourself.controller.js"></script>
    <script src="app/learn-yourself/learn-yourself.routes.js"></script>

    <script src="app/test-yourself/test-yourself.controller.js"></script>
    <script src="app/test-yourself/test-yourself.routes.js"></script>

    <script src="app/challenge-somebody/challenge-somebody.controller.js"></script>
    <script src="app/challenge-somebody/challenge-somebody.routes.js"></script>

    <script src="app/start-flags/start-flags.controller.js"></script>
    <script src="app/start-flags/start-flags.routes.js"></script>

</html>