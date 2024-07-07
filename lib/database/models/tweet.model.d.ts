import mongoose from "mongoose";
import { ITweetInterface } from "../interfaces/tweet.interface";
declare const TweetModel: mongoose.Model<ITweetInterface, {}, {}, {}, mongoose.Document<unknown, {}, ITweetInterface> & ITweetInterface & Required<{
    _id: unknown;
}>, any>;
export default TweetModel;
