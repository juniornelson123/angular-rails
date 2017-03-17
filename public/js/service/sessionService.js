angular.module("consultor").factory('sessionService', function($http, session){
	var baseUrl = "http://localhost:3000/api"	
	var authService = {};
 
  	authService.login = function (credentials) {
	    return $http
	      .post(baseUrl+'/sessions/signin.json', credentials)
	      .then(function (res) {
	      	console.log(res)
	      	
	      	return res;
	      	
	        //Session.create(res.data.id, res.data.user.id,
	          //             res.data.user.role);
	    }, function(erro){
	    	console.log(erro)
	    	return {info: "Erro ao tentar efetuar login"}
	    });
	};

	authService.register = function (credentials) {
	    return $http
	      .post(baseUrl+'/sessions/signup.json', credentials)
	      .then(function (res) {
	      	console.log(res)
	      	
	      	return res;
	      	
	        //Session.create(res.data.id, res.data.user.id,
	          //             res.data.user.role);
	    }, function(erro){
	    	console.log(erro)
	    	return {info: "Erro ao tentar efetuar login"}
	    });
	};

	authService.delete = function (credentials) {
	    return $http
	      .delete(baseUrl+'/sessions/signout.json',{headers: {'token': session.currentUser.token}}, credentials)
	      .then(function (res) {
	      	console.log(res)
	      	
	      	return res;
	      	
	        //Session.create(res.data.id, res.data.user.id,
	          //             res.data.user.role);
	    }, function(erro){
	    	console.log(erro)
	    	return {info: "Erro ao tentar efetuar login"}
	    });
	};

 
  authService.isAuthenticated = function () {
  	var user = session.currentUser()
  	return !!user
   	/*if(session.currentUser()){
   		console.log(session.currentUser())
    	return true
    }else{
    	return false
    }*/

  };
 
  authService.isAuthorized = function (authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
   
  };
 
  return authService;

})