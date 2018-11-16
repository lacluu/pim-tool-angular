import { Component, OnInit } from '@angular/core';
import {ProjectModel} from '../project.model';
import {ProjectsService} from '../projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  private searchString = '';
  private searchStatus = '';
  private projects: ProjectModel[];
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projectsService.projectChanged
      .subscribe (
        (projects: ProjectModel[]) => {
          this.projects = projects;
        }
      );
  }

  onSearchProject() {

  }

}
