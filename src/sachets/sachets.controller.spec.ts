import { Test, TestingModule } from '@nestjs/testing';
import { SachetsController } from './sachets.controller';
import { SachetsService } from './sachets.service';

describe('SachetsController', () => {
  let controller: SachetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SachetsController],
      providers: [SachetsService],
    }).compile();

    controller = module.get<SachetsController>(SachetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
