angular.module("consultor").controller('authController',function($scope, $location, Auth){
    Auth.currentUser().then(function (){
	      $location.path('/');
          
    })
   var config = {
        headers: {
            'X-HTTP-Method-Override': 'POST'
        }
    };
	$scope.$on('devise:new-registration', function (e, user){
		console.log("novo registro")
		$scope.user = user;
	});

	$scope.$on('devise:login', function (e, user){
	
		
		$scope.user = user;
	});

	$scope.$on('devise:logout', function (e, user){
		$scope.user = {};
	});

	$scope.login = function() {
    	Auth.login($scope.user, config).then(function(user){
	      console.log(user)
	      $location.path('/');
			$scope.signedIn = Auth.isAuthenticated;
			$scope.user = Auth.current_user
	    });
	};

	$scope.register = function() {
		Auth.register($scope.user).then(function(){
	      $location.path('/');
		});
	};
})