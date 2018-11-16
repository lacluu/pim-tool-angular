import {ProjectModel} from './project.model';

export class SearchDataModel {
  constructor(private projects: ProjectModel[], private totalPage: number, private page: number) {}
}
