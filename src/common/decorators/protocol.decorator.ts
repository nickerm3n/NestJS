import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Protocol = createParamDecorator((data, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.protocol;
});
