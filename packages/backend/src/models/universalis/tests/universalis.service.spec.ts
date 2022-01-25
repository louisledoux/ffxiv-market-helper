import { Test, TestingModule } from '@nestjs/testing';
import { UniversalisService } from '../universalis.service';

describe('UniversalisService', () => {
  let service: UniversalisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniversalisService],
    }).compile();

    service = module.get<UniversalisService>(UniversalisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
