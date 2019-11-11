import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { ProjectSchema } from '@angular-projects/schemas';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Project', schema: ProjectSchema, collection: 'projects'}])],
  controllers: [ProjectsController],
  providers: [ProjectsService]
})
export class ProjectsModule {}
