const { string } = require("joi");
const mongoose = require("mongoose");

const appSchema = mongoose.Schema({
    name: { type: String, require: true },
    category: { type: String, require: true },
    subCategory: { type: String },
    price: { type: Number, require: true },
    discount: { type: Number, require: true },
    image: { type: String, require: true },
    description: { type: String },
    variants: [{ size: String, color: String, stock: Number }],
    sizes: [String],
    colors: [String],
    stock: { type: Number, default: 0 },
    tags: [String],
    isFeatured: { type: Boolean, default: false },
    isBestSeller: { type: Boolean, default: false },
    fabric: { type: String },
    day:{type:String}
    
});
module.exports = mongoose.model("Product", appSchema);