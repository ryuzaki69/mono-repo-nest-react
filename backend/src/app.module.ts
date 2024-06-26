import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseMongoModule } from '@app/common';
import {
  BigArrayDocument,
  BigArrayRepository,
  BigArraySchema,
} from '@app/common/database-mongo/models/bigArray';

@Module({
  imports: [
    DatabaseMongoModule,
    DatabaseMongoModule.forFeature([
      { name: BigArrayDocument.name, schema: BigArraySchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, BigArrayRepository],
})
export class AppModule {}
