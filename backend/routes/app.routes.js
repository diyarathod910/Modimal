const express = require("express");


const router = express.Router();

module.exports = (router) => {

    const App = require("../controllers/product.controller.js");

    const User = require("../controllers/user.controller.js");

    const Cart = require("../controllers/cart.controllers.js");

    const Wishlist = require("../controllers/wishlist.controller.js");

    const Auth = require("../middleware/auth.js")

    router.post("/add-product", App.addProduct);

    router.get("/products", App.getProducts);

    router.post("/add-user", User.create);

    router.post("/login", User.loginUser);

    router.get("/user/:id", User.findOne);

     router.get("/products/day/:day",App.getProductsByDay);

    router.get("/products/:category/:name", App.getProductDetails);

    router.post("/cart/add", Auth, Cart.addToCart);

    router.get("/cart", Auth, Cart.getCart);

    router.put("/cart/update", Auth, Cart.updateCart);

    router.delete("/cart/remove", Auth, Cart.removeCart);


    router.post("/wishlist/toggle", Auth, Wishlist.toggleWishlist);

    router.get("/wishlist", Auth, Wishlist.getWishlist);

    // route
router.get("/products/search", App.getProductsByCategory);

   
}