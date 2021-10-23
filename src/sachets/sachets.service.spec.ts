import { Test, TestingModule } from '@nestjs/testing';
import { SachetsService } from './sachets.service';

describe('SachetsService', () => {
  let service: SachetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SachetsService],
    }).compile();

    service = module.get<SachetsService>(SachetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
