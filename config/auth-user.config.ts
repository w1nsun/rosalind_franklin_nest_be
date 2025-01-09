import { registerAs } from '@nestjs/config';
import { z } from 'zod';

export type AuthUserConfig = {
  secret: string;
  expiresIn: string;
  ignoreExpiration: boolean;
};

export default registerAs('auth_user', (): AuthUserConfig => {
  const value = {
    secret: process.env.AUTH_USER_SECRET,
    expiresIn: process.env.AUTH_USER_EXPIRES_IN,
  };

  const validationSchema = z
    .object({
      secret: z.string().min(16),
      expiresIn: z.string().min(2),
      ignoreExpiration: z.boolean().default(false),
    })
    .required();

  return validationSchema.parse(value);
});
