// const jwt = require('jsonwebtoken');
// const User = require('../model/app.model');
// const { func } = require('joi');

// module.exports = function () {
//     return function (req, res, next) {
//         next();
//         const token = jwt.sign({ _id: "req.body._id" }, 'secretKey', { expiresIn: "1h" });
//         console.log(token);

//         jwt.verify(token, "secretKey", (err, decodedToken) => {
//             if (err) {
//                 console.log("invalid token");
//             }
//             else {
//                 console.log(decodedToken);
//             }
//         })
//     }
// }
// const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//     try {
//         const authHeader = req.headers.authorization;

//         console.log("HEADER TOKEN:", req.headers.authorization);

//         if (!authHeader)
//             return res.status(401).json({ message: "No token" });

//         const token = authHeader.split(" ")[1];

//         const decoded = jwt.verify(token, process.env.TOKEN_KEY);

//         console.log("DECODED:", decoded);

//         req.userId = decoded._id || decoded.id || decoded.userId;

//         next();

//     } catch (err) {
//         res.status(401).json({ message: "Invalid token" });
//     }
// };
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        // console.log("HEADER TOKEN:", authHeader);

        if (!authHeader)
            return res.status(401).json({ message: "No token" });

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.TOKEN_KEY);

        // console.log("DECODED:", decoded);

        req.user = {
            _id: decoded._id || decoded.id || decoded.userId
        };

        next();

    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
};