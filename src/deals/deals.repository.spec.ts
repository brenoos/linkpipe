import { Test, TestingModule } from '@nestjs/testing';
import { DealsRepository } from './deals.repository';

describe('DealsRepository', () => {
  let provider: DealsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DealsRepository],
    }).compile();

    provider = module.get<DealsRepository>(DealsRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
