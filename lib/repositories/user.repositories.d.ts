import { IUserInterface } from "../database/interfaces/user.interface";
export declare const getUserRepo: (userId: string) => Promise<IUserInterface | null>;
export declare const deleteUserRepo: (userId: string) => Promise<boolean>;
export declare const createUserRepo: (user: IUserInterface) => Promise<boolean>;
export declare const updateUserRepo: (userId: string, updatedUser: IUserInterface) => Promise<boolean>;
export declare const updateUserWithTweetIdRepo: (userId: string, tweetId: string, deleteTweet: boolean) => Promise<boolean>;
