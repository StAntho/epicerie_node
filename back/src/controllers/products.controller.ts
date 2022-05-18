import { Request, Response } from 'express';
import { CreateProductData, PatchProductData } from '~interfaces/products.interface';
import { ProductsService } from '~services';

const productsService = new ProductsService();
export class ProductsController {
  getProduct = async (req: Request, res: Response) => {
    const productId = req.params.id;

    const article = await productsService.getProduct(productId);

    res.json({ article });
  };

  getProducts = async (req: Request, res: Response) => {
    const article = await productsService.getProducts();
    res.json({ article });
  };

  createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: CreateProductData = req.body;

      const newProduct = await productsService.createProduct(data);
      res.json({ article: newProduct });
    } catch (error) {
      next(error);
    }
  };

  updateProduct = async (req: Request, res: Response) => {
    const productId: string = req.params.id;
    const data: PatchProductData = req.body;

    const newProduct = await productsService.updateProduct(productId, data);
    res.json({ article: newProduct });
  };

  deleteProduct = async (req: Request, res: Response) => {
    const productId: string = req.params.id;
    await productsService.deleteProduct(productId);
    res.json({ message: 'sucess' });
  };
}
