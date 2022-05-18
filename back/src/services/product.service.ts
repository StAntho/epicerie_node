import { CreateProductData } from '~interfaces/product.interface';
import { Product } from '~models';

export class ProductsService {
  getProduct = async (productId: string) => {
    const product = await productId.findById(productId).lean();
    return product;
  };

  getProducts = async () => {
    const products = await ProductsService.find().lean();
    return products;
  };

  createProduct = async (articleDate: CreateProductData) => {
    const newProduct = new Product();

    newProduct.name = productDate.name;
    newProduct.price = productDate.price;

    await newProduct.save();

    return newProduct;
  };

  updateProduct = async (productId: string, articleData: PatchProductData) => {
    //   const product = await ProductService.findById(productId);

    //   articleData.name = articleData.name;
    //   articleData.price = articleData.price;
    //   await articleData.save();

    const product = await Product.updateOne({ _id: productId }, { ...articleData }, { new: true });
    return articleData;
  };

  deleteProduct = async (productId: string) => {
    await Product.deleteOne({ _id: productId });
  };
}

// export default ProductService;
