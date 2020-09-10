import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Deal } from './deals.schema';
import { Model } from 'mongoose';
import { InsertDealDto } from './dto/insertDeal.dto';

@Injectable()
export class DealsRepository {
  constructor(@InjectModel(Deal.name) private dealModel: Model<Deal>) {}

  async insert({ date, total_value }: InsertDealDto): Promise<Deal> {
    return this.dealModel.updateOne(
      { date },
      { $inc: { total_value } },
      { upsert: true },
    );
  }

  async listAll(): Promise<Deal[]> {
    return this.dealModel.find({});
  }
}
