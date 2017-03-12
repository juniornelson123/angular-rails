angular.module("news").config(function($routeProvider) {
	$routeProvider.when("/",{
		templateUrl: "partials/home/_home.html"
	})

	$routeProvider.when("/posts",{
		templateUrl: "partials/posts/_posts.html",
		controller: "postsController"
	})

	$routeProvider.otherwise("/")
})