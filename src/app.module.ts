import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SachetsModule } from './sachets/sachets.module';

@Module({
  imports: [SachetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
