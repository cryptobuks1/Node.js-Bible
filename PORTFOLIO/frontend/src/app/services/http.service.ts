import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project.model';
import { environment } from 'src/environments/environment';
import { ProjectsComponent } from '../pages/projects/projects.component';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // url base de la api
  private baseUrl: string = environment.BASE_API_URL;
  constructor(private readonly _http: HttpClient) { }

  public getProjects() {
    return this._http.get<Project[]>(this.baseUrl + "/projects")
  }
  public getProject(id: string) {
    return this._http.get<Project>(this.baseUrl + "/project/" + id);
  }
  public searchProject(query: string) {
    return this._http.get<Project[]>(this.baseUrl + "/project/search/" + query);
  }


}
