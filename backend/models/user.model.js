const { string, required } = require("joi");
const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    qty: {
        type: Number,
        default: 1
    },
    size: String,
    color: String
});

const appSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String },
    cart: [cartItemSchema],
     wishlist: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
});


module.exports = mongoose.model("user", appSchema);