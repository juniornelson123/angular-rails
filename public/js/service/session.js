angular.module("consultor").service('session', function($cookieStore){
	
	this.create = function (currentUser) {
		$cookieStore.put('user', currentUser );
	    console.log("sessao criada")
	};

	this.signed = function(){
		return $cookieStore.get('user');
	}

	this.currentUser = function(){
		return $cookieStore.get('user')
	}

	this.destroy = function () {
		$cookieStore.remove('user')
	};	
})