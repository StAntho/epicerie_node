import { model, Schema } from 'mongoose';
import { ProductDocument } from '~interfaces/products.interface';
const QRCode = require('qrcode');

const productSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  qrcode: {
    type: String,
    required: false,
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

// Schema.methods.generateQrcode = function (productId) {
//   QRCode.toDataURL('https://fr.reactjs.org/', function (err, url) {
//     console.log('url:' + url);
//   });
// };

export const Product = model<ProductDocument>('Product', productSchema);
