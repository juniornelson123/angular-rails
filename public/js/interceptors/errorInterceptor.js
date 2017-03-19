angular.module("consultor").factory('errorInterceptor',  function($q, $location, session){
	var errorInterceptor = {}

	return {
		request: function(config){
			//console.log(session.getCurrentUser().token)
			if (session.currentUser()) {
				console.log("Adicionando cabecalho")
			//console.log(session)
				config.headers['token'] = session.currentUser().token;				
			}
			return config;
		},
		

		responseError:function(rejection){
			if (rejection.status === 404) {
				$location.path("/error");
			}

			if (rejection.status === 500) {
				$location.path("/errorInternal")
			}

			if (rejection.status === 422) {
				console.log("Interceptor pegou")
				$location.path("/login")
			}
			return $q.reject(rejection);
		}
	}
})