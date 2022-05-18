import { Document } from 'mongoose';

export type ProductDocument = Product_I & Document;
export interface Product_I {
  _id: string;
  name: string;
  price: number;
  referralCode: string;
  img: string;
  createdAt: Date;
}

export interface CreateProductData {
  name: string;
  price: number;
}

export interface PatchProductData {
  name?: string;
  price?: number;
}
