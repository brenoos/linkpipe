import { Module } from '@nestjs/common';
import { PipedriveController } from './pipedrive.controller';
import { PipedriveService } from './pipedrive.service';
import { DealsModule } from 'src/deals/deals.module';

@Module({
  imports: [DealsModule],
  controllers: [PipedriveController],
  providers: [PipedriveService],
})
export class PipedriveModule {}
