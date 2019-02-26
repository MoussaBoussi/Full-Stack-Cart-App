const express = require("express")
const cart = express.Router()

let cartList = [
    {product: "Hamburger", price: 4.5, quantity: 2, id: 0 },
    {product: "Hot Dog", price: 5.32, quantity: 3, id: 1 }
]

cart.get("/cart-items", function(req,res){
    res.send(cartList)
    console.log("GET REQUEST MADE!")
})

cart.post("/cart-items", function(req,res){
    cartList.push(req.body)
    res.send(cartList)
})

cart.delete("/cart-items/:id", function(req,res){
    for (let i=0; i < cartList.length; i++) {
        if (cartList[i].id == req.params.id) {
            cartList.splice(i, 1)
            res.send(cartList)
            break;
        }
    }
})

cart.put("/cart-items/:id", function(req,res){
    for (let i=0; i < cartList.length; i++) {
        if (cartList[i].id == req.params.id) {
            cartList.splice(i, 1, req.body)
            res.send(cartList)
            break;
        }
    }
})


module.exports = cart