import { Routes } from '@angular/router';
import { HomeComponent } from './principal/home/home.component';
import {GaleriaComponent} from './principal/galeria/galeria.component';
import {ContactoComponent } from './principal/contacto/contacto.component';
import { LoginComponent } from './principal/login/login.component';
import { CitaPrincipalComponent } from './principal/citas/cita-principal/cita-principal.component';
import { CitasDetalleComponent } from './principal/citas/citas-detalle/citas-detalle.component';
import { RegistroComponent } from './principal/registro/registro.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GaleriaComponent },
  { path: 'contact', component: ContactoComponent },
  { path: 'login', component: LoginComponent},
  { path: 'citaPrincipal', component: CitaPrincipalComponent},
  { path: 'detalle-cita/:id', component: CitasDetalleComponent },
  { path: 'registro', component: RegistroComponent }

];
