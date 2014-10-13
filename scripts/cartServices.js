angular.module('cartApp.Services', []).
    factory('cartService', ['$http', function($http) {
        return {
            getCart: function(successCallback){
                $http.get('http://localhost:3000/carts').
                    success(function(data){
                        if(data.length == 1){
                            successCallback(data[0]);
                        }
                        else{
                            console.log('Found ' + data.length + ' carts.');
                        }
                    });
            }
        }
    }]);