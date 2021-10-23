import { Module } from '@nestjs/common';
import { SachetsService } from './sachets.service';
import { SachetsController } from './sachets.controller';

@Module({
  controllers: [SachetsController],
  providers: [SachetsService]
})
export class SachetsModule {}
