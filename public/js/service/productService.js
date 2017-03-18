angular.module("consultor").factory('productService', function($http, session){
	var baseUrl = "http://localhost:3000"	
	var productService = {};
	var currentUser = session.currentUser()

	productService.all = function(teste){
		
		return $http.get(baseUrl+"/products.json", {headers: {'token': currentUser.token}})
	}


	productService.find = function(id){

		return $http.get(baseUrl+"/products/"+id+".json", {headers: {'token': currentUser.token}})
	}

	productService.create = function(product){

		return $http.post(baseUrl+"/products.json", {headers: {'token': currentUser.token}}, product)
	}

	productService.update = function(product){

		return $http.put(baseUrl+"/products.json", {headers: {'token': currentUser.token}}, product)
	}

	productService.delete = function(id){

		return $http.delete(baseUrl+"/products/"+id+".json", {headers: {'token': currentUser.token}})
	}

	return productService
})