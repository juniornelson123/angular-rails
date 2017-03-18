angular.module("consultor").controller('navController', function($scope, sessionService, session, $location){
	console.log(sessionService.isAuthenticated())
	$scope.signedIn = function(){
		return sessionService.isAuthenticated();
  }
  	if ($scope.signedIn()) {
  	
  		$scope.user = session.currentUser();
  		console.log($scope.user.token)
  	}else{
  		$scope.user = null
  	}
  	
	$scope.$on('session:login', function (e, user){
		$scope.user = user;
  		console.log($scope.user.token)

		//$scope.signedIn();
	});

	$scope.logout = function(){
		session.destroy()
		$location.path("/login")
	}

	

})