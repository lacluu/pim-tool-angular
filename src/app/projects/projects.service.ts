import {Injectable} from '@angular/core';
import {ProjectModel} from './project.model';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs';

@Injectable()
export class ProjectsService {
  private baseUrl = 'http://localhost:8080/projects/';
  private projects: ProjectModel[] = [
    new ProjectModel(1, 1111, 'facebook', 'NEW', 'New', 'Customer', '10/3/2012', 1),
    new ProjectModel(2, 2222, 'google', 'PLA', 'Planned', 'Customer', '11/9/2013', 1),
    new ProjectModel(3, 3333, 'youtube', 'INP', 'In Progress', 'Customer', '12/10/2014', 1),
    new ProjectModel(4, 4444, 'translate', 'PLA', 'Planned', 'Customer', '20/1/2011', 1),
    new ProjectModel(5, 5555, 'mock', 'FIN', 'Finished', 'Customer', '2/12/2016', 1),
  ];

  projectChanged = new Subject<ProjectModel[]>();

  constructor(private http: Http) {}

  getProjectFromServer(searchString: string, searchStatus: string, searchPage: number) {
    return this.http.get(this.baseUrl + 'search')
      .subscribe(
        (response: Response) => {
          console.log(response);
          return response.json();
        }, (error: Response) => {
          return Observable.throw('Get project form server error!');
        }
      );
  }
}
