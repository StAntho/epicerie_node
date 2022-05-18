import { NextFunction, Request, Response } from 'express';
import { HttpException } from '~exceptions/HttpException';
import { CreateProductData, PatchProductData } from '~interfaces/product.interface';

export class ProductsDto {
  createProduct = (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.body.name) throw new HttpException(400, 'Name field required');
      if (!req.body.price) throw new HttpException(400, 'Price field required');

      if (req.body.name.trim().length === 0) throw new HttpException(400, 'Name field can not be empty');
      if (req.body.price !== 'number') throw new HttpException(400, 'Price has to be a number');
      if (req.body.price > 0) throw new HttpException(400, 'Price has to be greater than 0');

      const data: CreateProductData = {
        name: req.body.trim(),
        price: req.body.price,
      };

      req.body = data;
      next();
    } catch (error) {
      next(error);
    }
  };

  updateProduct = (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.body.name) {
        if (req.body.name.trim().length === 0) throw new HttpException(400, 'Name field can not be empty');
      }
      if (req.body.price) {
        if (req.body.price !== 'number') throw new HttpException(400, 'Price has to be a number');
        if (req.body.price > 0) throw new HttpException(400, 'Price has to be greater than 0');
      }
      const data: PatchProductData = {};
      if (req.body.name) data.name = req.body.trim();
      if (req.body.price) data.price = req.body.price;

      req.body = data;
      next();
    } catch (error) {
      next(error);
    }
  };
}
