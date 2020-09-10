import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PipedriveModule } from './pipedrive/pipedrive.module';

@Module({
  imports: [PipedriveModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
