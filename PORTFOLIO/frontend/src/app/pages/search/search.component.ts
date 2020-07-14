import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public projects: Project[] = [];
  query:string;
  constructor(
    private _activateRoute: ActivatedRoute,
    private _httpService: HttpService
  ) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe(params => {
      this.query = params['query'];
      this._httpService.searchProject(this.query).subscribe((project: Project[]) => {
        this.projects = project['data'];
      })
    })
  }

}
