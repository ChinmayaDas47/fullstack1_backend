"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var http = require("http");
var cors = require("cors");
var bodyParser = require("body-parser");
var routes_1 = require("./routes/routes");
var dotenv = require("dotenv");
var mongoose_1 = require("mongoose");
var app = express();
var server = http.createServer(app);
// Express config
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("PORT", 3000);
app.set("BASE_URL", "localhost");
dotenv.config();
// Define the Routes
app.use("/api/v1", routes_1.default);
// Mongo Connection
var mongoURI = process.env.MONGO_DB_URI;
if (!mongoURI) {
    console.error("MongoDb URL is not defined");
    process.exit(1);
}
mongoose_1.default.connect(mongoURI, {}).then(function () {
    console.log("MongoDB is connected");
}).catch(function (error) {
    console.log(error);
});
// Start the server
try {
    var _port = app.get("PORT");
    var _baseUrl = app.get("BASE_URL");
    server.listen(_port, function () {
        console.log("Server is Listening");
    });
}
catch (error) {
    console.log(error);
}
exports.default = server;
