angular.module('cartApp.Services', []).
    factory('cartService', ['$http', function($http) {
        return {
            getCart: function(successCallback){
                $http.get('http://localhost:3000/cart').
                    success(function(data){
                        if(data.length == 1){
                            successCallback(data[0]);
                        }
                        else{
                            console.log('Found ' + data.length + ' carts.');
                        }
                    });
            },
            getOrders: function(successCallback){
                $http.get('http://localhost:3000/orders').
                    success(function(data){
                        successCallback(data);
                    });
            },
            createOrder: function(order, successCallback){
                $http.post('http://localhost:3000/orders', order).
                    success(function(){
                        $http.post('http://localhost:3000/cart', {
                            "id": 1,
                            "products":[]
                        }).success(function(){
                            successCallback();
                        })
                    });
            },
            reloadCart: function(successCallback){
                $http.post('http://localhost:3000/cart', {
                    "id": 1,
                    "products": [
                        {
                            "quantity": 2,
                            "item": "Fight Club",
                            "unitPrice": 19.99
                        },
                        {
                            "quantity": 1,
                            "item": "Se7en",
                            "unitPrice": 23.26
                        },
                        {
                            "quantity": 1,
                            "item": "The Social Network",
                            "unitPrice": 21.49
                        },
                        {
                            "quantity": 3,
                            "item": "The Girl with the Dragon Tattoo",
                            "unitPrice": 24.99
                        }
                    ]}).success(function(){
                        successCallback();
                    });
                }
            }
        }
    ]);