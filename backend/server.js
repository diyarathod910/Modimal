const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const path = require("path");
import { fileURLToPath } from "url";
// const cookieValidator = require('./middleware/auth.js')


// const mw =  require('./app/middleware/auth.js')




mongoose.Promise = global.Promise;
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Successfully connected to the database");
    })
    .catch((err) => {
        console.log("Could not connect to the database. Error...", err);
        process.exit();
    });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


// const userRoutes = require("./routes/app.routes.js");

// app.use("/api/users", userRoutes);

// app.use(mw({ option1: '1', option2: '2' }))

async function validateCookies(req, res, next) {
    cookieValidator(req.cookies)
    next()
}

// app.use("/uploads", express.static("uploads"));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(bodyParser.json());
app.use(cors());
// app.use(validateCookies());

// const myLogger = function (req, res, next) {
//   console.log('LOGGED');
//   console.log("Res",req.body);
//   next(req);
// }

// app.use(routmyer);
// app.options("*", cors());

app.get("/", (req, res) => {
    res.json({ message: "Server is running :D" });
});

let PORT = 8080;

app.listen(PORT, () => {
    require("./routes/app.routes.js")(app);
    console.log(`Server is listening on port ${PORT}`);
});
