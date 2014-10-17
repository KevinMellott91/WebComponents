angular.module('cartApp.Controllers', ['angular-underscore'])
    .controller('navigationController', ['$scope', function($scope){
        $scope.$on('cart', function(event, data){
            console.log('...navigation received cart');
            $scope.itemsInCart = data.products.length;

            // Calculates the total price of all lines in the cart
            $scope.totalCartPrice = function(){
                if(data.products === undefined){
                    return 0;
                }

                var totalPrice = 0;
                $scope.each(data.products, function (product) {
                    totalPrice += (product.unitPrice * product.quantity);
                });
                return totalPrice;
            };
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
                totalPrice: $scope.totalCartPrice()
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

        // Add quantity to a cart item
        $scope.addQuantity = function(product, additionalQuantity){
            product.quantity += additionalQuantity;

            // Let the other controller know of the cart
            console.log('publishing cart quantity increase...');
            $rootScope.$broadcast('cart', $scope.cart);
        };

        // Decrease the quantity of a cart item, if it is not already at zero
        $scope.subtractQuantity = function(product, decreasedQuantity){
            if(product.quantity - decreasedQuantity <= 0){
                product.quantity = 0;
            }
            else{
                product.quantity -= decreasedQuantity;
            }

            // Let the other controller know of the cart
            console.log('publishing cart quantity decrease...');
            $rootScope.$broadcast('cart', $scope.cart);
        };

        // Updates the state of the cart, and notifies the other controllers of the change
        $scope.updateCart = function(){
            cartService.updateCart($scope.cart, function(){
                console.log('cart updated...');
                $scope.initializeCart();
            });
        };

        // Calculates the total price of all lines in the cart
        $scope.totalCartPrice = function(){
            if($scope.cart === undefined){
                return 0;
            }

            var totalPrice = 0;
            $scope.each($scope.cart.products, function (product) {
                totalPrice += (product.unitPrice * product.quantity);
            });
            return totalPrice;
        };

        $scope.initializeCart = function() {
            cartService.getCart(function (cartData) {
                $scope.cart = cartData;

                // Let the other controller know of the cart
                console.log('publishing cart...');
                $rootScope.$broadcast('cart', cartData);
            });
        };

        $scope.initializeCart();
    }]);
