import { Test, TestingModule } from '@nestjs/testing';
import { XivApiService } from '../xiv-api.service';

describe('XivApiService', () => {
  let service: XivApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XivApiService],
    }).compile();

    service = module.get<XivApiService>(XivApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
