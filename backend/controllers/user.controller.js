const { date } = require("joi");
const App = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

// for create user
exports.create = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        console.log(req.body);
        // const olduser = await App.findOne({ email: email.toLowerCase() });
        // console.log(olduser);

        // if (olduser) {
        //     return res.status(401).json({
        //         message: "user already exists,try again!!"
        //     });
        // }
        const hashpwd = bcrypt.hashSync(password, 10);


        let UserSchema = await new App({
            firstName,
            lastName,
            email: email.toLowerCase(),
            password: hashpwd,
        });

        const token = jwt.sign(
            { UserSchema_id: UserSchema._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "5h",
            }
        )
        console.log(token);

        UserSchema.token = token;
        console.log("scheama", UserSchema);

        const savedUser = await UserSchema.save();

        console.log("Saved:", savedUser);

        res.status(201).json(savedUser);
    }
    catch (err) {
        console.log(err);

    }
};

exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await App.findById(id);
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        return res.status(200).json({
            message: "user fetched successfully",
            data: user
        });
    }
    catch (err) {
        console.log(err);

    }
}


exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log(email);

        // check user
        const user = await App.findOne({ email });
        console.log(user);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // compare password
        const isMatch = bcrypt.compareSync(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid password",
            });
        }

        console.log("JWT:", process.env.TOKEN_KEY);
        const token = jwt.sign(
            { _id: user._id },
            process.env.TOKEN_KEY,
            { expiresIn: "1d" }
        );

        return res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};