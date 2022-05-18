import { Router } from 'express';
import ProductsController from '~controllers/products.controller';
import { Routes } from '~interfaces/routes.interface';

class ProdutsRoute implements Routes {
  public path = '/products';
  public router = Router();
  public productsController = new ProductsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {}
}

export default ProductsRoute;
