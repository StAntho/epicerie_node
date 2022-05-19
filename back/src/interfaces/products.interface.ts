import { Document } from 'mongoose';

export type ProductDocument = Product_I & Document;
export interface Product_I {
  _id: string;
  name: string;
  price: number;
  qrcode: string;
  img: string;
  createdAt: Date;
}

export interface CreateProductData {
  name: string;
  price: number;
  qrcode: string;
  img: string;
}

export interface PatchProductData {
  name?: string;
  price?: number;
  qrcode?: string;
  img?: string;
}
