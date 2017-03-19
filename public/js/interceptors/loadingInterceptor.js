angular.module("consultor").factory("loadingInterceptor", function ($q, $rootScope, $timeout) {
	return {
		
		request: function (config) {
			$rootScope.loadingGif = true;
			return config;
		},
		requestError: function (rejection) {
			return $q.reject(rejection);
		},
		response: function (response) {
			$rootScope.loadingGif = false;
			
			return response;
		},
		responseError: function (rejection) {
			$rootScope.loadingGif = false;
			return $q.reject(rejection);
		}
	}
});