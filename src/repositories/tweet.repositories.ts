import { ITweetInterface } from "../database/interfaces/tweet.interface";
import TweetModel from "../database/models/tweet.model";


export const getTweetRepo = async (
    tweetId: string
): Promise<ITweetInterface | null> => {
    try {
        const tweet = await TweetModel.findOne({tweetId: tweetId});
        return tweet;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getAllTweetRepo = async (
    userId: string
): Promise<any | null> => {
    try {
        var tweet = await TweetModel.find({adminId: userId});
        console.log(tweet);
        return tweet;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const deleteTweetRepo = async (
    tweetId: string
): Promise<boolean> => {
    try {
        const deleted = await TweetModel.findOneAndDelete({tweetId: tweetId});
        if(deleted){
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const createTweetRepo = async (
    tweet: ITweetInterface
): Promise<boolean> => {
    try {
        await TweetModel.create(tweet);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const updateTweetRepo = async (
    tweetId: string,
    updatedTweet: ITweetInterface
): Promise<boolean> => {
    try {
        const result = await TweetModel.findOneAndUpdate({tweetId: tweetId}, updatedTweet, {new: true});
        if(result) {
            return true;
        } else {
            return false;
        }

    } catch (error) {
        console.log(error);
        return false;
    }
};