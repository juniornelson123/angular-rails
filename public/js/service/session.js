angular.module("consultor").service('session', function($cookieStore){
	
	this.create = function (currentUser) {
		$cookieStore.put('user', currentUser );
	    
	    console.log(currentUser.token)

	};

	this.signed = function(){
		return $cookieStore.get('user');
	}

	this.currentUser = function(){
		return $cookieStore.get('user')
	}

	this.destroy = function (id) {
			$cookieStore.remove('user')
		
	};	
})