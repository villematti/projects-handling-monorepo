import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from '@angular-projects/core-data';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectsService {
  constructor(@InjectModel('Project') private readonly projectModel:Model<Project>) {}

  findAll(): Observable<Project[]> {
    return this.projectModel.find();
  }

  findOne(id: string): Observable<Project> {
    return this.projectModel.findOne({ _id: id });
  }

  create(project: Project): Observable<Project> {
    const newProject = new this.projectModel(project);
    return newProject.save();
  }

  delete(id: string): Observable<Project> {
    return this.projectModel.findByIdAndRemove(id);
  }

  update(id: string, project: Project): Observable<Project> {
    return this.projectModel.findByIdAndUpdate(id, project, { new: true })
  }
}
