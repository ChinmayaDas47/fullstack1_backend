import { ITweetInterface } from "../database/interfaces/tweet.interface";
export declare const getTweetRepo: (tweetId: string) => Promise<ITweetInterface | null>;
export declare const getAllTweetRepo: (userId: string) => Promise<any | null>;
export declare const deleteTweetRepo: (tweetId: string) => Promise<boolean>;
export declare const createTweetRepo: (tweet: ITweetInterface) => Promise<boolean>;
export declare const updateTweetRepo: (tweetId: string, updatedTweet: ITweetInterface) => Promise<boolean>;
