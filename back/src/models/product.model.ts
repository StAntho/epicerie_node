import { model, Schema, Document } from 'mongoose';
import { Product } from '~interfaces/users.interface';

const productSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    uppercase: true,
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

const productModel = model<Product & Document>('Product', productSchema);

export default productModel;
