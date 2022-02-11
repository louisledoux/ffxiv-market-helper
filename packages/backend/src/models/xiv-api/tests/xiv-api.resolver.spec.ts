import { Test, TestingModule } from '@nestjs/testing';
import { XivApiResolver } from '../xiv-api.resolver';

describe('XivApiResolver', () => {
  let resolver: XivApiResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XivApiResolver],
    }).compile();

    resolver = module.get<XivApiResolver>(XivApiResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
