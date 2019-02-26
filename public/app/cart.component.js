"use strict"

const cart = {
    templateUrl: "app/cart.html",
    controller: ["CartService", function(CartService){
        const vm = this
        vm.showCart = false

        CartService.getAllItems().then(function(response) {
            vm.cartList = response.data
        })
        vm.toggleCart = function() {
            vm.showCart = !vm.showCart
        }
        vm.addItem = function(item) {
            CartService.addItem(item).then(function(response) {
                vm.cartList = response.data
            })
        }
        vm.removeItem = function(id) {
            CartService.removeItem(id).then(function(response) {
                vm.cartList = response.data
            })
        }
    }]
}

angular
    .module("App")
    .component("cart", cart)