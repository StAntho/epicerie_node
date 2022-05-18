import { NextFunction, Request, Response } from 'express';
import { HttpException } from '~exceptions/HttpException';
import { RequestWithUser } from '~interfaces/auth.interface';
import { Product } from '~interfaces/product.interface';

class ProductsController {
  public findProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = await productModel.findOne();
      res.json({ product });
    } catch (error) {
      next(error);
    }
  };
}

export default ProductsController;
