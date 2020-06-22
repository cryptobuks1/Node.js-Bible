import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Project } from '../../models/project.model'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];
  constructor(public _httpService: HttpService) { }

  ngOnInit(): void {
    console.log("corriendo project.component");

    this._httpService.getProjects().subscribe((projects: Project[]) => {
      this.projects = projects['data'];
      //debugger;
    })

  }

}
