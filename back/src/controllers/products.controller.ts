import { Request, Response, NextFunction } from 'express';
import { CreateProductData, PatchProductData } from '~interfaces/products.interface';
import { ProductsService } from '~services';

const productsService = new ProductsService();
export class ProductsController {
  getProduct = async (req: Request, res: Response) => {
    const productId = req.params.id;

    const product = await productsService.getProduct(productId);

    res.json({ product });
  };

  getProducts = async (req: Request, res: Response) => {
    const product = await productsService.getProducts();
    res.json({ product });
  };

  createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: CreateProductData = req.body;

      const newProduct = await productsService.createProduct(data);
      res.json({ product: newProduct });
    } catch (error) {
      next(error);
    }
  };

  updateProduct = async (req: Request, res: Response) => {
    const productId: string = req.params.id;
    const data: PatchProductData = req.body;

    const newProduct = await productsService.updateProduct(productId, data);
    res.json({ product: newProduct });
  };

  deleteProduct = async (req: Request, res: Response) => {
    const productId: string = req.params.id;
    await productsService.deleteProduct(productId);
    res.json({ message: 'sucess' });
  };
}
