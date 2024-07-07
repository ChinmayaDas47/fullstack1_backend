import mongoose from "mongoose";
import { IUserInterface } from "../interfaces/user.interface";
declare const UserModel: mongoose.Model<IUserInterface, {}, {}, {}, mongoose.Document<unknown, {}, IUserInterface> & IUserInterface & Required<{
    _id: unknown;
}>, any>;
export default UserModel;
