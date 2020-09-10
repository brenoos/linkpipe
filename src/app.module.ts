import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PipedriveModule } from './pipedrive/pipedrive.module';
import { DealsModule } from './deals/deals.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

const configService = new ConfigService();
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PipedriveModule,
    DealsModule,
    MongooseModule.forRoot(configService.get('DATABASE_DNS')),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
