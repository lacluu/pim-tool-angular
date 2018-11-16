export class ProjectModel {
  id: number;
  projectNumber: number;
  name: string;
  status: string;
  statusLabel?: string;
  customer: string;
  group?: string;
  member?: string;
  startDate: string;
  endDate?: string;
  version: number;

  constructor(id: number, projectNumber: number, name: string, status: string,
              statusLabel: string, customer: string, startDate: string, version: number) {
    this.id = id;
    this.projectNumber = projectNumber;
    this.name = name;
    this.status = status;
    this.statusLabel = statusLabel;
    this.customer = customer;
    this.startDate = startDate;
    this.version = version;
  }
}
