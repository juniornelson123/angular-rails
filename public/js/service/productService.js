angular.module("consultor").factory('productService', function($http, session){
	var baseUrl = "http://localhost:3000"	
	var productService = {};

	productService.all = function(teste){
		
		return $http.get(baseUrl+"/products.json"/*, {headers: {'token': session.currentUser().token}}*/)
	}


	productService.find = function(id){

		return $http.get(baseUrl+"/products/"+id+".json"/*, {headers: {'token': session.currentUser().token}}*/)
	}

	productService.create = function(product){

		return $http.post(baseUrl+"/products.json", {product: product}/*, {headers: {'token': session.currentUser().token}}*/)
	}

	productService.update = function(product){

		return $http.put(baseUrl+"/products/"+product.id+".json", {product: product}/*, {headers: {'token': session.currentUser().token}}*/)
	}

	productService.delete = function(id){

		return $http.delete(baseUrl+"/products/"+id+".json"/*, {headers: {'token': session.currentUser().token}}*/)
	}

	return productService
})