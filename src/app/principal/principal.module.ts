import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // FullCalendar module
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { CitaPrincipalComponent } from './citas/cita-principal/cita-principal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CitasDetalleComponent } from './citas/citas-detalle/citas-detalle.component';
import { RegistroCitasComponent } from './citas/registro-citas/registro-citas.component';

@NgModule({
  declarations: [
    HomeComponent,
    GaleriaComponent,
    ContactoComponent,
    LoginComponent,
    CitaPrincipalComponent,
    CitasDetalleComponent,
    RegistroCitasComponent


  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    FullCalendarModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    GaleriaComponent,
    ContactoComponent,
    LoginComponent,
    CitaPrincipalComponent,
    CitasDetalleComponent,
    RegistroCitasComponent

  ]
})
export class PrincipalModule   {


}
