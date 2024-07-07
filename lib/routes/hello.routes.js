"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var helloRouter = (0, express_1.Router)();
// Define router paths
helloRouter.get("/", function (req, res) {
    res.json({ "data": "Server is Live!!!" });
});
exports.default = helloRouter;
