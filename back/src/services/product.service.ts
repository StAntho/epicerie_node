import { CreateProductData, PatchProductData } from '~interfaces/products.interface';
import { Product } from '~models';

export class ProductsService {
  getProduct = async (productId: string) => {
    const product = await Product.findById(productId).lean();
    return product;
  };

  getProducts = async () => {
    const products = await Product.find().lean();
    return products;
  };

  createProduct = async (productData: CreateProductData) => {
    const newProduct = new Product();

    newProduct.name = productData.name;
    newProduct.price = productData.price;

    await newProduct.save();

    return newProduct;
  };

  updateProduct = async (productId: string, productData: PatchProductData) => {
    const product = await Product.updateOne({ _id: productId }, { ...productData }, { new: true });
    return product;
  };

  deleteProduct = async (productId: string) => {
    await Product.deleteOne({ _id: productId });
  };
}
