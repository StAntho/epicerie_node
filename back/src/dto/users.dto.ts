import { HttpException } from '~exceptions/HttpException';
import { NextFunction, Request, Response } from 'express';
import { CreateUser } from '~interfaces/users.interface';
import { UserService } from '~services';

const usersService = new UserService();
export class UsersDto {
  createProduct = (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.body.username) throw new HttpException(400, 'username field required');
      if (!req.body.password) throw new HttpException(400, 'password field required');

      if (req.body.username.trim().length === 0) throw new HttpException(400, 'username field can not be empty');
      if (req.body.password.trim().length === 0) throw new HttpException(400, 'password field can not be empty');

      const data: CreateUser = {
        username: req.body.username.trim(),
        password: req.body.password,
      };

      req.body = data;
      next();
    } catch (error) {
      next(error);
    }
  };

  basicAuth = async (req: Request, res: Response, next: NextFunction) => {
    // check for basic auth header
    console.log('basicAuth called');
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
      return res.status(401).json({ message: 'Missing Authorization Header' });
    }

    // verify auth credentials
    const base64Credentials = req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');

    const [username, password] = credentials.split(':');
    if (username == '') {
      return res.status(401).json({ message: 'Missing username field  ' });
    }
    const user = await usersService.authenticate({ username, password });

    if (!user) {
      return res.status(401).json({ message: 'Invalid Authentication Credentials' });
    }
    req.body = user;
    next();
  };
}
