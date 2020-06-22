import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
// al momento de llamar a este componente se le pasa un atributo project
  @Input() project: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
