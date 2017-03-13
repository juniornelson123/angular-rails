angular.module("consultor").controller('navController', function($scope, Auth){
	$scope.signedIn = Auth.isAuthenticated;
  	$scope.logout = Auth.logout;

  	Auth.currentUser().then(function (user){
    	$scope.user = user;
  	});

	$scope.$on('devise:new-registration', function (e, user){
		console.log("novo registro")
		$scope.user = user;
	});

	$scope.$on('devise:login', function (e, user){
		$scope.user = user;
			console.log("login na nav")
	});

	$scope.$on('devise:logout', function (e, user){
		$scope.user = {};
	});
})