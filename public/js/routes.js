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


    $routeProvider.when('/produtos', {
      templateUrl: 'views/products/index.html',
      controller: 'productController'
    });

    $routeProvider.when('/produto/:id', {
      templateUrl: 'views/products/show.html',
      controller: 'showProductController'
    });   

    $routeProvider.when('/produtos/new/', {
      templateUrl: 'views/products/new.html',
      controller: 'formProductController'
    });   

    $routeProvider.when('/produtos/:id/edit', {
      templateUrl: 'views/products/edit.html',
      controller: 'formProductController'
    });   

    $routeProvider.otherwise('/login')

   
})
