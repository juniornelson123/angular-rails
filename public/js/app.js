app = angular.module("consultor",["ngRoute", "ngResource", "ngCookies"])

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push("errorInterceptor");
    $httpProvider.interceptors.push("loadingInterceptor");
});

app.run(function($rootScope, $location, sessionService, $window) {

     $rootScope.$on('$routeChangeStart', function (event, current,next) {
        
        if((current.$$route.originalPath == '/login' || current.$$route.originalPath == '/register')){
            console.log("esta na pagina de login ou registro")
            if(sessionService.isAuthenticated()){
                console.log("esta altenticado")
                $location.path("/home")
            }
        }else if(!sessionService.isAuthenticated()){
            $location.path('/login')
        }else{
            next
        }
        
    });

  
});