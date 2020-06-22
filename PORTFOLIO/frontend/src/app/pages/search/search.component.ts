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
  public project: Project = {
    name: '',
    description: '',
    image: '',
    _id: '',
    tags: [],
    createdAt: null,
    updatedAt: null
  };
  constructor(
    private _activateRoute: ActivatedRoute,
    private _httpService: HttpService
  ) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe(params => {
      const id: string = params['id'];
      this._httpService.getProject(id).subscribe((project: Project) => {
        this.project = project['data'];
      })
    })
  }

}
