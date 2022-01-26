import { Request, Response, CookieOptions } from 'express';
import * as jwt from 'jsonwebtoken';
import { Logger } from '@nestjs/common';
import { AuthenticationError } from 'apollo-server-errors';
import { User } from '@prisma/client';
import { ONE_WEEK } from '@constants/time';
import { APP_TOKEN_SECRET } from '@environments/application';

export interface Token {
  expiresIn: number,
  emittedAt: number,
  userId: string,
}

export const COOKIE_SETTINGS: CookieOptions = {
  // cookie is valid for all subpaths of my domain
  path: '/',
  // this cookie won't be readable by the browser
  httpOnly: true,
  // and won't be usable outside of my domain
  sameSite: 'none',
  // HTTPS?
  secure: true,
};

// Cache issues led to create this function to make sure the emittedAt key is always regenerated
export function generateTokenSettings() {
  return {
    expiresIn: ONE_WEEK,
    emittedAt: Date.now(),
  };
}

export function createToken(
  user: Omit<User, 'avatar' | 'password'>,
  tokenOptions: jwt.SignOptions = {},
): string {
  const tokenSettings = { ...generateTokenSettings(), ...tokenOptions };
  return jwt.sign(
    {
      userId: user.id,
      ...tokenSettings,
    },
    APP_TOKEN_SECRET,
  );
}

export function getTokenPayload(token: string): Token {
  try {
    return jwt.verify(token, APP_TOKEN_SECRET) as Token;
  } catch (e) {
    Logger.error(e);
    throw new AuthenticationError('User unauthenticated', e);
  }
}

export function isTokenExpired(expiresIn: number, emittedAt: number) {
  return Date.now() > (expiresIn + emittedAt);
}

export async function getUserId(req: Request, res: Response) {
  const token = req.cookies.ffxiv_market_helper_session;
  if (!token) {
    return '';
  }
  const { userId, expiresIn, emittedAt } = getTokenPayload(token);
  if (isTokenExpired(expiresIn, emittedAt)) {
    res.clearCookie('ffxiv_market_helper_session');
    Logger.warn('Session expired');
    throw new AuthenticationError('Session expired');
  }
  // TODO: refactor this method to call Prisma DTO without using a NestJS service
  // ? NestJS services are not compatible with the context method
  // const user = await this.userService.findById(userId);
  // if (!user) {
  //   res.clearCookie('ffxiv_market_helper_session');
  //   Logger.warn('Session expired');
  //   throw new AuthenticationError('Session expired');
  // }
  // Logger.log(`UserID, ${userId}`);
  return userId;
}
