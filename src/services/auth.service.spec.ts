import { Test, TestingModule } from '@nestjs/testing';
import { AppAuthService } from './auth.service';

describe('ServicesService', () => {
  let service: AppAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppAuthService],
    }).compile();

    service = module.get<AppAuthService>(AppAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
