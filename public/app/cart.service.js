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
            data: { ...item, price: Number(item.price), quantity: Number(item.quantity)}
        })
    }
    self.removeItem = function(id) {
        return $http({
            method: "DELETE",
            url: `/cart-items/${id}`
        })
    }
    self.editQuantity = function(item) {
        return $http({
            method: "PUT",
            url: `/cart-items/${item.id}`,
            data: item
        })
    }
}

angular
    .module("App")
    .service("CartService", CartService)