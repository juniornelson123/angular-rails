app = angular.module("consultor",["ngRoute", "ngResource", "ngCookies"])

app.run(['$rootScope', '$location', 'sessionService', function ($rootScope, $location, sessionService) {
    $rootScope.$on('$routeChangeStart', function (event) {

        if (!sessionService.isAuthenticated()) {
            console.log('DENY');
            $location.path('/home');
            event.preventDefault();
        }
        else {
            console.log('ALLOW');
            $location.path('/home');
        }
    });
}]);