angular.module("consultor").factory('sessionService', function($http, session){
	var baseUrl = "http://localhost:3000/api"	
	var authService = {};
	var currentUser = session.currentUser()
 
  	authService.login = function (credentials) {
	    return $http
	      .post(baseUrl+'/sessions/signin.json', credentials)
	     
	};

	authService.register = function (credentials) {
	    return $http
	      .post(baseUrl+'/sessions/signup.json', credentials)
	     
	};

	authService.delete = function (id) {
	    return $http
	      .delete(baseUrl+'/sessions/signout/'+id+'.json',{headers: {'token': currentUser.token}})
	      
	};

 
  authService.isAuthenticated = function () {
  	var user = session.currentUser()
  	return !!user
   	

  };
 
  authService.isAuthorized = function (authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
   
  };
 
  return authService;

})