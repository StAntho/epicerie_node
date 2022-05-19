import { Document } from 'mongoose';

export type UserDocument = User_I & Document;
export interface User_I {
  _id: string;
  // referralCode: String;
  // pushToken: String;
  username: string;
  password: string;
  // firebaseUID: string;
  createdAt: Date;
}

export interface CreateUser {
  username: string;
  password: string;
}

export interface PatchUserData {
  username?: string;
  password?: string;
}
