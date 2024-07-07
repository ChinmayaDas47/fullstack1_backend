"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var tweetSchema = new mongoose_1.Schema({
    tweetId: { type: String, required: true },
    adminId: { type: String, required: true },
    content: { type: String, default: "" },
    createdAt: { type: String, required: true },
});
var TweetModel = mongoose_1.default.model('TweetModel', tweetSchema);
exports.default = TweetModel;
