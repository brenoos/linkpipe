import { Controller, Post, Body, Get } from '@nestjs/common';
import { DealsService } from './deals.service';

@Controller('deals')
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}

  @Get()
  async index() {
    return this.dealsService.index();
  }
}
