const { date } = require("joi");
const App = require("../models/product.model");
// const Department = require("../model/dept.model.js")
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

exports.addProduct = async (req, res) => {
    try {
        const { name, category, subCategory, price, discount, image, description, variants, sizes, colors, stock, tags, isFeatured, isBestSeller, fabric, day } = req.body;
        console.log(req.body);
        console.log(req.file);



        const UserSchema = await new App({
            name,
            category,
            subCategory,
            price,
            discount,
            image: `http://localhost:8080/uploads/${image}`,
            description,
            variants,
            sizes,
            colors,
            stock,
            tags,
            isFeatured,
            isBestSeller,
            fabric, day
        });


        // await UserSchema.save();
        UserSchema.save().then((data) => {

            // res.status(201).json(data);

            res.send(data);
        });
    }
    catch (err) {
        console.log(err);

    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await App.find(); // MongoDB

        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getProductDetails = async (req, res) => {
    try {
        const { category, name } = req.params;

        const product = await App.findOne({
            category: category,
            name: { $regex: new RegExp("^" + name.replaceAll("-", " "), "i") }
        });

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(product);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getProductsByDay = async (req, res) => {
    try {
        let { day } = req.params;

        console.log("RAW DAY:", day);

        day = day.trim().toLowerCase(); // 🔥 IMPORTANT

        console.log("NORMALIZED DAY:", day);

        // const products = await App.find({ day:day });
        const products = await App.find({
            day: { $exists: true, $eq: day }
        });
        console.log("FOUND:", products.length);

        res.json({ products });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// controller
// controllers/product.controller.js

const Product = require("../models/product.model");

exports.getProductsByCategory = async (req, res) => {
    try {
        const { q } = req.query;

        if (!q) {
            return res.json({ products: [] });
        }

        const products = await Product.find({
            $or: [
                { name: { $regex: q, $options: "i" } },
                { category: { $regex: q, $options: "i" } },
                { subCategory: { $regex: q, $options: "i" } },
                { tags: { $in: [new RegExp(q, "i")] } }
            ]
        });

        res.json({ products });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};