angular.module("consultor").controller('productController', function($scope, $location, productService){
	$scope.products = []
	var allProducts = function(){
		productService.all("teste").then(function(products){
			$scope.products = products.data
		}, function(erro){
			console.log(erro)
		})
	}

	$scope.destroy = function(id){
		productService.delete(id).then(function(product){
			$scope.products.splice($scope.products.indexOf(product), 1);
			console.log("deletado com sucesso")
			$location.path("/produtos")
		}, function(erro){
			console.log(erro)
		})
	}



	allProducts()

})

.controller('showProductController', function($scope, $routeParams, productService, $location){
	var showProduct = function(){
		productService.find($routeParams.id).then(function(product){
			$scope.product = product.data
			
		}, function(erro){
			console.log(erro)

		})
	}

	$scope.destroy = function(id){
		productService.delete(id).then(function(product){
			console.log("deletado com sucesso")
			$location.path("/produtos")
		}, function(erro){
			console.log(erro)
		})
	}

	showProduct()
})

.controller('formProductController', function($scope, $location, $routeParams, productService, session){
	if ($routeParams.id) {
		console.log("tem parametross")
		productService.find($routeParams.id).then(function(product){
			console.log(product.data)
			$scope.product = {}

			$scope.product.id = product.data.id
			$scope.product.title = product.data.title
			$scope.product.price = product.data.price
			$scope.product.description = product.data.description
			 
		}, function(erro){	

		})
	}

	$scope.saveProduct = function(product){
		console.log(product)
		if ($routeParams.id) {

			productService.update(product).then(function(product){
				//$scope.product = product.data
				$location.path("/produtos")
				console.log("produto atualizado com sucesso") 
			
			}, function(erro){
				console.log(erro)
				console.log("Erro ao atualizar produto")

			})

		}else{

			product.user_id = session.currentUser().id
			productService.create(product).then(function(product){
				//$scope.product = product.data
				$location.path("/produtos")
				console.log("produto cadastrado com sucesso") 
				
			}, function(erro){
				console.log(erro)

			})
		}
	
	}



	

})