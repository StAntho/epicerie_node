import { Router } from 'express';
import { ProductsController } from '~controllers';
import { ProductsDto } from '~dto/product.dto';
import { Routes } from '~interfaces/routes.interface';

const productsController = new ProductsController();
const dto = new ProductsDto();
export class ProductsRoute implements Routes {
  public path = '/products';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:id`, productsController.getProduct);
    this.router.get(`${this.path}/`, productsController.getProducts);
    this.router.post(`${this.path}/`, dto.createProduct, productsController.createProduct);
    this.router.patch(`${this.path}/:id`, dto.updateProduct, productsController.updateProduct);
    this.router.delete(`${this.path}/:id`, productsController.deleteProduct);
  }
}
