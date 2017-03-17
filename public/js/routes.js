angular.module("consultor").config(function($routeProvider) {
	$routeProvider.when("/home",{
		templateUrl: "views/index.html"
	})

	$routeProvider.when('/login',  {
      templateUrl: 'views/login.html',
      controller: 'authController'
    })

    $routeProvider.when('/register', {
      templateUrl: 'views/register.html',
      controller: 'authController'
    });		


})
