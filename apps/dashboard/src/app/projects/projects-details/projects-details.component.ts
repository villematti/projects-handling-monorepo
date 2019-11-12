import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@angular-projects/core-data';

@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.css']
})
export class ProjectsDetailsComponent {

  @Input() selectedProject: Project;
  @Output() cancelChange: EventEmitter<null> = new EventEmitter();
  @Output() saveProject: EventEmitter<null> = new EventEmitter();

  cancel() {
    this.cancelChange.emit();
  }

  save() {
    this.saveProject.emit();
  }

}
