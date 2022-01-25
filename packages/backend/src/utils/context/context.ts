import { IContext } from './interface/context.interface';
import { getUserId } from '../auth/auth-utils';

export async function appContext(context: IContext) {
  let userId: string;
  try {
    userId = context.req.cookies
    && await getUserId(context.req, context.res);
  } catch (e) {
    userId = '';
  }
  return {
    ...context,
    userId,
  };
}
