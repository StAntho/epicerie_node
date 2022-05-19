import { CreateUser, PatchUserData } from '~interfaces/users.interface';
import { User, encryptPassword, validPassword } from '~models';

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
    const user = await User.find({ username: username });
    if (user.length !== 0) {
      console.log('user:', user);
      if (validPassword(password)) {
        return user;
      }
    }
    return null;
  };

  createUser = async (user: CreateUser) => {
    const newUser = new User();

    newUser.username = user.username;

    newUser.password = await encryptPassword(user.password);

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
