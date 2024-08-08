import { Routes } from '@angular/router';
import { HomeComponent } from './principal/home/home.component';
import {GaleriaComponent} from './principal/galeria/galeria.component';
import {ContactoComponent } from './principal/contacto/contacto.component';
import { LoginComponent } from './principal/login/login.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GaleriaComponent },
  { path: 'contact', component: ContactoComponent },
  { path: 'login', component: LoginComponent}
];
