app = angular.module("consultor",["ngRoute", "ngResource", "ngCookies"])

app.run(function($rootScope, $location, sessionService, $window) {

     $rootScope.$on('$routeChangeStart', function (event, current,next) {
        /*var userAuthenticated = ...; /* Check if the user is logged in */
        console.log("mudando rota")
        if((current.$$route.originalPath == '/login' || current.$$route.originalPath == '/register')){
            console.log("esta na pagina de login ou registro")
            if(sessionService.isAuthenticated()){
                console.log("esta altenticado")
                $location.path("/home")
            }
        }else if(!sessionService.isAuthenticated()){
            console.log("acesso restrito")
            $location.path('/login')
        }else{
            next
            console.log("autenticado")
        }
        
    });
});