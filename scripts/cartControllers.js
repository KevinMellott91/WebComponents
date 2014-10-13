angular.module('cartApp.Controllers', ['angular-underscore'])
    .controller('navigationController', ['$scope', function($scope){
        $scope.$on('cart', function(event, data){
            console.log('...navigation received cart');
            $scope.itemsInCart = data.products.length;
        });
    }])
    .controller('summaryController', ['$scope', 'cartService', function($scope, cartService){
        $scope.$on('cart', function(){
            console.log('...summary received cart');
            cartService.getOrders(function(orderData){
                console.log('loading orders...');
                $scope.orders = orderData;
            });
        });
    }])
    .controller('cartController', ['$scope', '$rootScope', 'cartService', function($scope, $rootScope, cartService){
        // Creates a new order, with a random order number and the contents of the cart.
        $scope.submit = function(){
            cartService.createOrder({
                id: $scope.random(1, 999999),
                totalPrice: $scope.totalPrice
            }, function(){
                console.log('order created...');
                $scope.initializeCart();
            });
        };

        // Provides a simple way to get data back into the cart
        $scope.reload = function(){
            cartService.reloadCart(function(){
                console.log('cart reloaded...');
                $scope.initializeCart();
            });
        };

        $scope.initializeCart = function() {
            cartService.getCart(function (cartData) {
                $scope.cart = cartData;
                $scope.products = cartData.products;

                // Calculate the total price of the basket.
                $scope.totalPrice = 0;
                $scope.each($scope.products, function (product) {
                    $scope.totalPrice += (product.unitPrice * product.quantity);
                });

                // Let the other controller know of the cart
                console.log('publishing cart...');
                $rootScope.$broadcast('cart', cartData);
            });
        };

        $scope.initializeCart();
    }]);
