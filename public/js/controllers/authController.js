angular.module("consultor").controller('authController',function($rootScope, $scope, $location, sessionService, session){
/*    Auth.currentUser().then(function (){
	      $location.path('/');
          
    })
*/

	$scope.login = function() {
    	sessionService.login({user: $scope.user}).then(function(user){
	      console.log(user)
	      if (user.status == 200) {
	      		$rootScope.$broadcast("session:login", user.data)
	      		session.create(user.data)
	      		console.log(user.data.token)
	      		$location.path("/")

	      	}else{
	      		console.log("Usuario ou senha não existem")
	      }
	      //$location.path('/');
			  //$scope.setCurrentUser(user);
    
			//$scope.signedIn = Auth.isAuthenticated;
		//	$scope.user = Auth.current_user
	    }, function(erro){
	    	console.log(erro)
	    });
	};

	$scope.register = function() {
		sessionService.register({user: $scope.user}).then(function(user){
	      console.log(user)
		}, function(erro){
			console.log(erro)
		});
	};
})