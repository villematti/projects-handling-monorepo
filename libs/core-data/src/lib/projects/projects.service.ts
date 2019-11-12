import { Injectable } from '@angular/core';
import { Project, ProjectDTO } from './project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, flatMap, switchMap } from 'rxjs/operators';

const BASE_URL = 'http://localhost:3333/'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private httpClient: HttpClient) {}

  model = 'projects';

  getUrl(): string {
    return `${BASE_URL}${this.model}`;
  }

  getUrlForId(id: string): string {
    return this.getUrl() + `/${id}`
  }

  all$(): Observable<Project[]> {
    return this.httpClient.get<ProjectDTO[]>(this.getUrl())
      .pipe(map(params => params.map(p => this.transformId(p))));
  }

  one$(id: string): Observable<Project> {
    return this.httpClient.get<ProjectDTO>(this.getUrlForId(id))
      .pipe(map(p => this.transformId(p)));
  }

  create$(project: Project): Observable<Project> {
    return this.httpClient.post<ProjectDTO>(this.getUrl(), project)
      .pipe(map(p => this.transformId(p)));
  }

  update$(project: Project): Observable<Project> {
    return this.httpClient.put<ProjectDTO>(this.getUrlForId(project.id), project)
      .pipe(map(p => this.transformId(p)));
  }

  delete$(id: string): Observable<Project> {
    return this.httpClient.delete<ProjectDTO>(this.getUrlForId(id))
      .pipe(map(p => this.transformId(p)));
  }

  private transformId(p: ProjectDTO): Project {
    return {
      id: p._id,
      title: p.title,
      details: p.details,
      percentComplete: p.percentComplete,
      approved: p.approved
    };
  }
}
