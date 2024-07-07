"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    uid: { type: String, required: true },
    tweets: { type: [String], default: [] },
    firstName: { type: String, default: "User" },
    lastName: { type: String, default: "Name" },
    email: { type: String, required: true },
    createdAt: { type: String, required: true },
});
var UserModel = mongoose_1.default.model('UserModel', userSchema);
exports.default = UserModel;
