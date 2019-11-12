import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '@angular-projects/core-data';
import { Project } from '@angular-projects/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  primaryColor = 'red';

  projects$: Observable<Project[]>;

  selectedProject: Project;

  constructor(private readonly projectService: ProjectsService) { }

  ngOnInit(): void {
    this.getAllProjects();
    this.resetProject();
  }

  getAllProjects(): void {
    this.projects$ = this.projectService.all$();
  }

  resetProject() {
    const emptyProject: Project = {
      id: '',
      title: '',
      details: '',
      percentComplete: 0,
      approved: false
    }

    this.selectedProject = emptyProject;
  }

  selectProject(project): void {
    if (!project) {
      this.selectedProject = null;
      return;
    }
    this.projectService.one$(project.id).subscribe(resp => {
      this.selectedProject = resp;
    });
  }

  saveProject(project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  createProject(project: Project) {
    this.projectService.create$(project).subscribe(res => {
      this.getAllProjects();
      this.resetProject();
    });
  }

  updateProject(project: Project) {
    this.projectService.update$(project).subscribe(res => {
      this.getAllProjects();
      this.selectedProject = project;
    })
  }

  deleteProject(project: Project): void {

    const approve = confirm("Are you sure you want to delete this project?");

    if (!approve) {
      return;
    }

    this.projectService.delete$(project.id).subscribe(resp => {
      this.getAllProjects();
    });
  }

  cancel(): void {
    this.resetProject();
  }

}
