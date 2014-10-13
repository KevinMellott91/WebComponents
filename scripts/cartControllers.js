angular.module('cartApp.Controllers', [])
    .controller('cartController', ['$scope', 'cartService', function($scope, cartService){
        $scope.foo = 'bar';
    }]);
