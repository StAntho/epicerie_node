import { NextFunction, Request, Response } from 'express';
// import { HttpException } from '~exceptions/HttpException';
// import { RequestWithUser } from '~interfaces/auth.interface';
// import { User } from '~interfaces/users.interface';
// import AuthService from '~services/auth.service';
import { UserService } from '~services';
import { CreateUser, PatchUserData } from '~interfaces/users.interface';
import jsonwebtoken from 'jsonwebtoken';

const usersService = new UserService();
export class UsersController {
  //   public findUser = async (req: Request, res: Response, next: NextFunction) => {
  //     try {
  //       const user = await userModel.findOne();
  //       res.json({ user });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };
  getUser = async (req: Request, res: Response) => {
    const userId = req.params.id;

    const user = await usersService.getUser(userId);

    res.json({ user });
  };

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: CreateUser = req.body;

      const newUser = await usersService.createUser(data);
      res.json({ user: newUser });
    } catch (error) {
      next(error);
    }
  };

  authenticate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.body;
      const token = jsonwebtoken.sign({ id: user._id }, 'secret');

      return res.json({ message: 'Success', user: user, token: token });
    } catch (error) {
      console.log('ERROR', error);

      next(error);
    }
  };

  updateUser = async (req: Request, res: Response) => {
    const userId: string = req.params.id;
    const data: PatchUserData = req.body;

    const newUser = await usersService.updateUser(userId, data);
    res.json({ user: newUser });
  };

  deleteUser = async (req: Request, res: Response) => {
    const userId: string = req.params.id;
    await usersService.deleteUser(userId);
    res.json({ message: 'sucess' });
  };
}
