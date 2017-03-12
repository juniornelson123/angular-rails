angular.module("news").controller('postsController', function($scope, $resource){
	var Post = $resource("http://localhost:3000/posts.json")

	var getPosts = function(){
		Post.query(function(posts){
			console.log(posts.resource)
		}, function(erro){
			console.log(erro)

		})
	}

	getPosts()
})