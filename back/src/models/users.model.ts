import { model, Schema, Document } from 'mongoose';
import { UserDocument } from '~interfaces/users.interface';
import bcrypt from 'bcrypt';

const schema: Schema = new Schema({
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

schema.pre('save', function (next) {
  const user: UserDocument = this as UserDocument;

  if (!user.isModified('password')) return next();

  if (user.password) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
        user.password = hash;

        next();
      });
    });
  }
});

schema.methods.comparePassword = function (candidatePassword) {
  const user: UserDocument = this as UserDocument;

  return bcrypt.compareSync(candidatePassword, user.password);
};

export const User = model<UserDocument>('User', schema);
