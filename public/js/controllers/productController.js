angular.module("consultor").controller('productController', function($scope, productService){
	$scope.products = []
	console.log(productService)
	var allProducts = function(){
		productService.all("teste").then(function(products){
			console.log(products)
			$scope.products = products.data
		}, function(erro){
			console.log(erro)
		})
	}

	allProducts()

})

.controller('showProductController', function($scope, $routeParams, productService){
	var showProduct = function(){
		productService.find($routeParams.id).then(function(product){
			$scope.product = product.data
			console.log(product) 
			
		}, function(erro){
			console.log(erro)

		})
	}

	showProduct()
})

.controller('formProductController', function($scope, $routeParams, productService, session){
	
	$scope.saveProduct = function(product){
		product.user_id = session.currentUser().id
		product.status_id = 1
		productService.create(product).then(function(product){
			//$scope.product = product.data
			console.log(product) 
			
		}, function(erro){
			console.log(erro)

		})
	
	}

})