import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '@angular-projects/core-data';
import { Project } from '@angular-projects/core-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  primaryColor = 'red';

  projects: Project[];

  selectedProject: Project;

  constructor(private readonly projectService: ProjectsService) { }

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects(): void {
    this.projects = this.projectService.all();
  }

  selectProject(project): void {
    this.selectedProject = project;
    console.log(project);
  }

  cancel(): void {
    this.selectProject(null);
  }

}
