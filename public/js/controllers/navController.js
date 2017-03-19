angular.module("consultor").controller('navController', function($scope,$rootScope, sessionService, session, $location){
	//$rootScope.loadingGif = true
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