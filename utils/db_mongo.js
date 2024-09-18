require('dotenv').config()


const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const dbUrl = process.env.DB_URL_ATLAS || "mongodb://localhost:27017/e-commerce";
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to MongoDB established"));

module.exports = mongoose;