import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Project } from '@angular-projects/core-data';
import { ProjectsService } from './projects.service';
import { Observable, of } from 'rxjs';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  getData(): Observable<Project[]> {
    return this.projectsService.findAll();
  }

  @Get(':id')
  getProject(@Param('id') id: string): Observable<Project> {
    return this.projectsService.findOne(id);
  }

  @Post()
  createProject(@Body() project: Project): Observable<Project> {
    return this.projectsService.create(project);
  }

  @Put(':id')
  updateProject(@Body() project: Project, @Param('id') id) {
    return this.projectsService.update(id, project);
  }

  @Delete(':id')
  deleteProject(@Param('id') id): Observable<Project> {
    return this.projectsService.delete(id);
  }
}
