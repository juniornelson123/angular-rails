angular.module("consultor").controller('navController', function($scope, sessionService, session, $location){
	console.log(sessionService.isAuthenticated())
	$scope.signedIn = function(){
		return sessionService.isAuthenticated();
  }
  	if ($scope.signedIn) {
  		console.log(session.currentUser())

  		$scope.user = session.currentUser();
  	}else{
  		$scope.user = null
  	}
  	
	$scope.$on('session:login', function (e, user){
		console.log("novo login")
		console.log(user)
		$scope.user = user;
		//$scope.signedIn();
	});

	$scope.logout = function(){
		session.destroy()
		$location.path("/login")
	}

	

})