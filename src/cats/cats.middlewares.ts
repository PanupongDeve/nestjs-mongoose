import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

@Injectable()
export class CatMiddleware implements NestMiddleware {
  async resolve(name: string): Promise<MiddlewareFunction> {

    return async (req, res, next) => {
      console.log('middle has working'); // [ApplicationModule] Request...
      next();
    };
 }
}