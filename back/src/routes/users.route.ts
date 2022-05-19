import { Router } from 'express';
import { UsersController } from '~controllers/users.controller';
import { Routes } from '~interfaces/routes.interface';
import { UsersDto } from '~dto/users.dto';

const usersController = new UsersController();
const dto = new UsersDto();
export class UsersRoute implements Routes {
  public path = '/users';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/`, usersController.register);
    this.router.post(`${this.path}/login`, dto.basicAuth);
  }
}
