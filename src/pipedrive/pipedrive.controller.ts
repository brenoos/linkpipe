import { Controller, Post, Body } from '@nestjs/common';
import { PipedriveService } from './pipedrive.service';

@Controller('pipedrive')
export class PipedriveController {
  constructor(private readonly pipedriveService: PipedriveService) {}

  @Post()
  postbackDeal(@Body() body) {
    if (body.current.status === 'won')
      return this.pipedriveService.dealWon(body.current);
  }
}
