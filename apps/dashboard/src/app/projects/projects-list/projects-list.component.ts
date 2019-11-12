import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@angular-projects/core-data';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  @Input() projects: Project[];
  @Input() primaryColor = "red";
  @Output() deleteProject: EventEmitter<Project> = new EventEmitter();
  @Output() selectProject: EventEmitter<Project> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
