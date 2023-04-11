import { Test, TestingModule } from '@nestjs/testing';
import { HasingbcryptService } from './bcrypt.service';

describe('HasingbcryptService', () => {
  let service: HasingbcryptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HasingbcryptService],
    }).compile();

    service = module.get<HasingbcryptService>(HasingbcryptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
