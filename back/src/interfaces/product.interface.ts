import { Document } from 'mongoose';

export type ProductDocument = Product & Document;
export interface Product {
  _id: string;
  name: string;
  price: string;
  referralCode: string;
  img: string;
  createdAt: Date;
}
