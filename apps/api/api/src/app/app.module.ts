import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { MongooseModule } from '@nestjs/mongoose';
import conf from './../config';
@Module({
  imports: [ProjectsModule, MongooseModule.forRoot(conf.mongoURL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
