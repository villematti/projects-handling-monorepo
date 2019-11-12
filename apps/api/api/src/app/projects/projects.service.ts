import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProjectDTO, Project } from '@angular-projects/core-data';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectsService {
  constructor(@InjectModel('Project') private readonly projectModel:Model<ProjectDTO>) {}

  findAll(): Observable<ProjectDTO[]> {
    return this.projectModel.find();
  }

  findOne(id: string): Observable<ProjectDTO> {
    return this.projectModel.findOne({ _id: id });
  }

  create(project: ProjectDTO): Observable<ProjectDTO> {
    const newProject = new this.projectModel(project);
    return newProject.save();
  }

  delete(id: string): Observable<ProjectDTO> {
    return this.projectModel.findByIdAndRemove<ProjectDTO>(id);
  }

  update(id: string, project: Project): Observable<ProjectDTO> {
    return this.projectModel.findByIdAndUpdate<ProjectDTO>(id, project, { new: true })
  }
}
