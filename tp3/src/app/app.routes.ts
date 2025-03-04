import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {GenerateurComponent} from "./generateur/generateur.component";
import {VoyageDetailComponent} from "./voyage-detail/voyage-detail.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'generateur', component: GenerateurComponent },
  { path: 'voyage-detail/:id', component:VoyageDetailComponent },
  {path:'**', component: PageNotFoundComponent}

];
