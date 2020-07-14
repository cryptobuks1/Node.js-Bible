import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // Router se utiliza para compartir información de un componente a otro a traavés de las rutas.
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  searchTechnology(query: string) {
    this._router.navigate(["/search", query])
  }
}
