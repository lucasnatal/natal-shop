var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
      }).
      when('/produtos', {
        templateUrl: 'produtos.html',
        controller: 'ProdutosCtrl'
      }).
      when('/listas', {
        templateUrl: 'listas.html',
        controller: 'ListasCtrl'
      }).    
      when('/compras', {
        templateUrl: 'compras.html',
        controller: 'ComprasCtrl'
      }).  
      otherwise({
        redirectTo: '/'
      });
  }
])
//CONTROLLERS
.controller('MainCtrl', ['$scope', 
	function($scope){

	}
])
.controller('ProdutosCtrl', ['$scope', 
	function($scope){

	}
])
.controller('ListasCtrl', ['$scope',
	function(){

	}
])
.controller('ComprasCtrl', ['$scope',
	function(){

	}
]);
//END CONTROLLERS
