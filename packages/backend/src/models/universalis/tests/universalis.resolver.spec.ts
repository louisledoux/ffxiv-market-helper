import { Test, TestingModule } from '@nestjs/testing';
import { UniversalisResolver } from '../universalis.resolver';

describe('UniversalisResolver', () => {
  let resolver: UniversalisResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniversalisResolver],
    }).compile();

    resolver = module.get<UniversalisResolver>(UniversalisResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
