import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { MaterialModule } from '@angular-projects/material';
import { ProjectsService } from '@angular-projects/core-data';
import { FormsModule } from '@angular/forms';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';


@NgModule({
  declarations: [ProjectsComponent, ProjectsListComponent, ProjectsDetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ProjectsRoutingModule
  ],
  providers: [ProjectsService]
})
export class ProjectsModule { }
