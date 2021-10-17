import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import moment from 'moment';

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

export const verifyAge = (req, res, next) => {
  const dob = moment(req.body.dob);
  const today = moment(new Date());
  const age = moment.duration(today.diff(dob)).asYears();
  if (age < 18) {
    return res.status(403).send({
      message: "Only 18+ are allowed to register",
    });
  }
  next()
};

export const isAuthorized = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Authentication  failed',

    });
  }
};