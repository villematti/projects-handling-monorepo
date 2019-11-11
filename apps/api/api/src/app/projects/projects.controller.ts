import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Project } from '@angular-projects/core-data';

@Controller('projects')
export class ProjectsController {
  @Get()
  getData(): Project[] {
    return [
      {
        id: '1',
        title: 'Project One',
        details: 'This is a sample project',
        percentComplete: 20,
        approved: false,
      },
      {
        id: '2',
        title: 'Project Two',
        details: 'This is a sample project',
        percentComplete: 40,
        approved: false,
      },
      {
        id: '3',
        title: 'Project Three',
        details: 'This is a sample project',
        percentComplete: 100,
        approved: true,
      }
    ];
  }

  @Get(':id')
  getProject(@Param('id') id): Project {
    return {
      id: '1',
      title: 'Project One',
      details: 'This is a sample project',
      percentComplete: 20,
      approved: false,
    }
  }

  @Post()
  createProject(@Body() project: Project): string {
    return `${project.title} ${project.details} has been created!`;
  }

  @Put(':id')
  updateProject(@Body() project: Project, @Param('id') id) {
    return `Project ID ${id} has been updated`;
  }

  @Delete(':id')
  deleteProject(@Param('id') id) {
    return `Project id ${id} was deleted.`;
  }
}
