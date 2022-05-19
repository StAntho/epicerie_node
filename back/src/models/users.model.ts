import { model, Schema } from 'mongoose';
import { UserDocument } from '~interfaces/users.interface';
import bcrypt from 'bcrypt';

const userSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // referralCode: {
  //   type: string,
  //   required: true,
  //   uppercase: true,
  // },
  // pushToken: string,
  // firebaseUID: {
  //   type: string,
  //   required: true,
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

/*
  Méthode pour valider et crypter le mot de passe
*/
export async function encryptPassword(password: string) {
  const salt = await bcrypt.genSalt(5);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
}

export const validPassword = async function (candidatePassword: string) {
  const result = bcrypt.compare(candidatePassword, this.password);
  return result;
};

export const User = model<UserDocument>('User', userSchema);
