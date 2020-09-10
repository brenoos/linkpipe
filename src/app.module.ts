import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PipedriveModule } from './pipedrive/pipedrive.module';
import { DealsModule } from './deals/deals.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    PipedriveModule,
    DealsModule,
    MongooseModule.forRoot(
      'mongodb+srv://pipeuser:fDrUahaJLAVbcULZ@cluster0.z7yke.mongodb.net/linkpipe?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
