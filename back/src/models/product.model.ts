import { model, Schema } from 'mongoose';
import { ProductDocument } from '~interfaces/products.interface';

const productSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  referralCode: {
    type: String,
    required: true,
    uppercase: true,
  },
  img: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Product = model<ProductDocument>('Product', productSchema);
