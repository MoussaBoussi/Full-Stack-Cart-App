const express = require("express")
const cart = express.Router()
const pool = require("./connection")

function selectAll(req,res) {
    pool.query("select * from shoppingcart order by id asc").then(function(result){
        res.send(result.rows)
    })
}

cart.get("/cart-items", function(req,res){
    selectAll(req,res)
})

cart.post("/cart-items", function(req,res){
    console.log(req.body);
    pool.query("insert into shoppingcart (product, price, quantity) values ($1::text, $2::real, $3::int)", 
    [req.body.product, req.body.price, req.body.quantity]).then(function(){
        selectAll(req,res)
    })
})

cart.delete("/cart-items/:id", function(req,res){
    pool.query("delete from shoppingcart where id=$1::int", [req.params.id]).then(function(){
        selectAll(req,res)
    })
    
})

cart.put("/cart-items/:id", function(req,res){
    pool.query("update shoppingcart set quantity=$1::int where id=$2::int", [req.body.quantity, req.params.id]).then(function(){
        selectAll(req,res)
    })
})


module.exports = cart