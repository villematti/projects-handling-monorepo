import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@angular-projects/core-data';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.css']
})
export class ProjectsDetailsComponent {

  originalTitle: string;
  currentProject: Project;
  @Output() cancel: EventEmitter<null> = new EventEmitter();
  @Output() save: EventEmitter<Project> = new EventEmitter();

  @Input() set project(value) {
    this.originalTitle = value ? value.title : undefined;
    this.currentProject = Object.assign({}, value);
  }
}
