import dotenv from 'dotenv';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

dotenv.config();

const SECRET = process.env.SECRET || 'default_secret'; // Use the environment variable or a default value

export function getJwt(object, expiresIn = '30d') {
  return jwt.sign(object, SECRET, { expiresIn });
}

export async function hash_password(password) {
  return new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(16).toString('hex');

    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(`${salt}:${derivedKey.toString('hex')}`);
    });
  });
}

// You can also use the getJwt function like this:
const userObject = { userId: '123', username: 'john_doe' };
const token = getJwt(userObject);
console.log('JWT Token:', token);


