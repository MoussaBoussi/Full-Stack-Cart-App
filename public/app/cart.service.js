"use strict"

function CartService($http) {
    const self = this
    self.getAllItems = function(){
        return $http({
            method: "GET",
            url: "/cart-items"
        })
    }
    self.addItem = function(item) {
        return $http({
            method: "POST",
            url: "/cart-items",
            data: item
        })
    }
    self.removeItem = function(id) {
        return $http({
            method: "DELETE",
            url: `/cart-items/${id}`
        })
    }
}

angular
    .module("App")
    .service("CartService", CartService)