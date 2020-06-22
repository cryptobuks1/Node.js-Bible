import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectComponent } from './pages/project/project.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
  {
    path: 'home', component: HomePageComponent
  }, {
    path: 'about', component: AboutComponent
  }
  , {
    path: 'projects', component: ProjectsComponent
  }
  , {
    path: 'project/:id', component: ProjectComponent
  }, {
    path: 'search/:query', component: SearchComponent
  }
  , {
    path: '**', pathMatch: "full", redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
