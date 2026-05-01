const User = require("../models/user.model");
const Product = require("../models/product.model");

const mongoose = require("mongoose");


exports.toggleWishlist = async (req, res) => {
    try {
        const userId = req.user._id;
        console.log("user from wish", userId);

        const user = await User.findById(req.user?._id)
            .populate("wishlist");

        // console.log("user afer", user);
        // console.log("Wishlist:", user.wishlist); // 👈 CHECK THIS


        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const { productId } = req.body;

        const exists = user.wishlist.some(
            (item) => item._id.toString() === productId.toString()
        );


        console.log("Exists:", exists);

        if (exists) {
            user.wishlist = user.wishlist.filter(
                (item) => item._id.toString() !== productId.toString()
            );
        } else {
            user.wishlist.push(productId);
        }
        await user.save();

        res.json({
            message: exists ? "Removed from wishlist" : "Added to wishlist",
            wishlist: user.wishlist
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getWishlist = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
            .populate("wishlist");

        res.json({ wishlist: user.wishlist });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};