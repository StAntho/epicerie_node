import { CreateUser, PatchUserData } from '~interfaces/users.interface';
import { User, encryptPassword } from '~models';
import { HttpException } from '~exceptions/HttpException';

export class UserService {
  getUser = async (userId: string) => {
    const user = await User.findById(userId).lean();
    return user;
  };

  getUsers = async () => {
    const users = await User.find().lean();
    return users;
  };

  authenticate = async ({ username, password }) => {
    const user = await User.findOne({ username: username });

    if (!user) throw new HttpException(404, 'User not found');
    if (!user.comparePassword(password)) throw new HttpException(400, 'Wrong password');

    return user;
  };

  createUser = async ({ username, password }: CreateUser) => {
    const newUser = new User();

    newUser.username = username;
    newUser.password = password;

    await newUser.save();

    return newUser;
  };

  updateUser = async (userId: string, userData: PatchUserData) => {
    const user = await User.updateOne({ _id: userId }, { ...userData }, { new: true });
    return user;
  };

  deleteUser = async (userId: string) => {
    await User.deleteOne({ _id: userId });
  };
}
