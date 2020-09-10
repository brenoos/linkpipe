import { Injectable } from '@nestjs/common';
import { DealsRepository } from './deals.repository';
import { InsertDealDto } from './dto/insertDeal.dto';

@Injectable()
export class DealsService {
  constructor(private readonly dealsRepository: DealsRepository) {}

  async store(payload: InsertDealDto) {
    return this.dealsRepository.insert(payload);
  }

  async index() {
    return this.dealsRepository.listAll();
  }
}
