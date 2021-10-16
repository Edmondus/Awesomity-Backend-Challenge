import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const hashPassword = (unhashedPassword) => {
  const hashedPassword = bcrypt.hashSync(unhashedPassword, 10);
  return hashedPassword;
}

export const checkPassword = (unhashedPassword, hashedPassword)  => {
  try {
    return bcrypt.compareSync(unhashedPassword, hashedPassword)
  } catch(error) {
    throw error
  }
}

export const getJwtToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET)
}

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}