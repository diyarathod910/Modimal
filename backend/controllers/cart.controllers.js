// const { User } = require("../models/user.model");


const User = require("../models/user.model");
const Product = require("../models/product.model");

const mongoose = require("mongoose");


exports.addToCart = async (req, res) => {
    try {
        const { productId, size, color } = req.body;
        const userId = req.user._id;

        const User = mongoose.model("user");
        const user = await User.findById(userId);

        const existing = user.cart.find(
            (item) =>
                item.productId && // Add this safety check
                item.productId.toString() === productId &&
                item.size === size &&
                item.color === color
        );

        if (existing) {
            existing.qty += 1;
        } else {
            user.cart.push({
                productId,
                size,
                color,
                qty: 1
            });
        }

        await user.save();

        // 🔥 RETURN POPULATED CART
        const updatedUser = await User.findById(userId)
            .populate("cart.productId");

        res.json({ cart: updatedUser.cart });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.getCart = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await mongoose.model("user")
            .findById(userId)
            .populate("cart.productId");

        // Filter out items where productId is null (product was deleted)
        const validCart = user.cart.filter(item => item.productId !== null);

        res.json({ cart: validCart });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.updateCart = async (req, res) => {
    const { productId, size, color, type } = req.body;
    const userId = req.user._id;

    const User = mongoose.model("user");
    const user = await User.findById(userId);

    const getId = (p) => (p._id ? p._id.toString() : p.toString());

    const item = user.cart.find(
        (i) =>
            getId(i.productId) === productId.toString() &&
            i.size === size &&
            i.color === color
    );
    if (!item) {
        return res.status(404).json({ message: "Item not found" });
    }

    if (type === "inc") item.qty += 1;
    if (type === "dec") item.qty = Math.max(1, item.qty - 1);

    await user.save();

    const updatedUser = await User.findById(userId)
        .populate("cart.productId");

    res.json({ cart: updatedUser.cart });
};

exports.removeCart = async (req, res) => {
    const { productId, size, color } = req.body;
    const userId = req.user._id;

    const User = mongoose.model("user");
    const user = await User.findById(userId);

    const getId = (p) => (p._id ? p._id.toString() : p.toString());

    user.cart = user.cart.filter(       
        (i) =>
            !(
                getId(i.productId) === productId.toString() &&
                i.size === size &&
                i.color === color
            )
    );

    await user.save();

    const updatedUser = await User.findById(userId)
        .populate("cart.productId");

    res.json({ cart: updatedUser.cart });
};