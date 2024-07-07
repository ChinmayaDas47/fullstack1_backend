"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTweetController = exports.updateTweetController = exports.createTweetController = exports.getAllTweetController = exports.getTweetController = void 0;
var tweet_repositories_1 = require("../repositories/tweet.repositories");
var user_repositories_1 = require("../repositories/user.repositories");
var getTweetController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var tweetId, tweet, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                tweetId = req.params.tweetId;
                console.log(req);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, tweet_repositories_1.getTweetRepo)(tweetId)];
            case 2:
                tweet = _a.sent();
                if (tweet) {
                    res.status(200).json({ "data": tweet });
                }
                else {
                    res.status(500).json({ "error": "Tweet not found" });
                }
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.log(error_1);
                res.status(500).json({ "error": error_1 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getTweetController = getTweetController;
var getAllTweetController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, tweet, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = req.params.userId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, tweet_repositories_1.getAllTweetRepo)(userId)];
            case 2:
                tweet = _a.sent();
                if (tweet) {
                    res.status(200).json({ "data": tweet });
                }
                else {
                    res.status(500).json({ "error": "Tweet not found" });
                }
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.log(error_2);
                res.status(500).json({ "error": error_2 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getAllTweetController = getAllTweetController;
var createTweetController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var tweet, success, userUpdateSuccess, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                tweet = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, (0, tweet_repositories_1.createTweetRepo)(tweet)];
            case 2:
                success = _a.sent();
                if (!success) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, user_repositories_1.updateUserWithTweetIdRepo)(tweet.adminId, tweet.tweetId, false)];
            case 3:
                userUpdateSuccess = _a.sent();
                if (userUpdateSuccess) {
                    res.status(200).json({ "data": tweet });
                }
                else {
                    res.status(500).json({ "error": "User not updated." });
                }
                return [3 /*break*/, 5];
            case 4:
                res.status(500).json({ "error": "Tweet not created" });
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_3 = _a.sent();
                console.log(error_3);
                res.status(500).json({ "error": error_3 });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.createTweetController = createTweetController;
var updateTweetController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedTweet, success, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                updatedTweet = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, tweet_repositories_1.updateTweetRepo)(updatedTweet.tweetId, updatedTweet)];
            case 2:
                success = _a.sent();
                if (success) {
                    res.status(200).json({ "data": "Tweet updated" });
                }
                else {
                    res.status(500).json({ "error": "Tweet not updated" });
                }
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                console.log(error_4);
                res.status(500).json({ "error": error_4 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateTweetController = updateTweetController;
var deleteTweetController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var tweetId, request, success, userUpdateSuccess, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                tweetId = req.params.tweetId;
                request = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, (0, tweet_repositories_1.deleteTweetRepo)(tweetId)];
            case 2:
                success = _a.sent();
                if (!success) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, user_repositories_1.updateUserWithTweetIdRepo)(request.adminId, tweetId, true)];
            case 3:
                userUpdateSuccess = _a.sent();
                if (userUpdateSuccess) {
                    res.status(200).json({ "data": "User updated." });
                }
                else {
                    res.status(500).json({ "error": "User not updated." });
                }
                return [3 /*break*/, 5];
            case 4:
                res.status(500).json({ "error": "Tweet not created" });
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_5 = _a.sent();
                console.log(error_5);
                res.status(500).json({ "error": error_5 });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.deleteTweetController = deleteTweetController;
