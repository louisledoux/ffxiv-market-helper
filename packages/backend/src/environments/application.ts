import * as dotenv from 'dotenv';

dotenv.config();

export const NODE_ENV = process.env.NODE_ENV || 'development';

// Application env variables
const { END_POINT } = process.env;
const GRAPHQL_DEPTH_LIMIT: number = +process.env.GRAPHQL_DEPTH_LIMIT;
const PORT: number = +process.env.PORT || 4000;
const { FRONTEND_URL } = process.env;
const RATE_LIMIT_MAX: number = +process.env.RATE_LIMIT_MAX;

// Bcrypt variables
const BCRYPT_SALT: number = +process.env.BCRYPT_SALT;

// JWT variables
const APP_TOKEN_SECRET: string = process.env.TOKEN_PRIVATE_KEY;

export {
  END_POINT,
  GRAPHQL_DEPTH_LIMIT,
  PORT,
  FRONTEND_URL,
  RATE_LIMIT_MAX,
  BCRYPT_SALT,
  APP_TOKEN_SECRET,
};
