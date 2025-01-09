import { Test, TestingModule } from '@nestjs/testing';

import { AuthRestApiController } from './auth_rest_api.controller';
import { AuthRestApiService } from './auth_rest_api.service';

describe('AuthRestApiController', () => {
  let authRestApiController: AuthRestApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthRestApiController],
      providers: [AuthRestApiService],
    }).compile();

    authRestApiController = app.get<AuthRestApiController>(AuthRestApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(authRestApiController.getHello()).toBe('Hello World!');
    });
  });
});
