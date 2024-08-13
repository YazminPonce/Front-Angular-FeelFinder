import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // Importa el plugin de FullCalendar
import interactionPlugin from '@fullcalendar/interaction';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { CitaPrincipalComponent } from './citas/cita-principal/cita-principal.component';
import { CitasDetalleComponent } from './citas/citas-detalle/citas-detalle.component';
import { RegistroCitasComponent } from './citas/registro-citas/registro-citas.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ListaPacienteComponent } from './paciente/lista-paciente/lista-paciente.component';
import { DetallePacienteComponent } from './paciente/detalle-paciente/detalle-paciente.component';
import { AgregarPacienteComponent } from './paciente/agregar-paciente/agregar-paciente.component';
import { PrincipalDiarioComponent } from './diario/principal-diario/principal-diario.component';
import { EmocionesDiarioComponent } from './diario/emociones-diario/emociones-diario.component';
import { DetalleDiarioComponent } from './diario/detalle-diario/detalle-diario.component';

@NgModule({
  declarations: [
    HomeComponent,
    GaleriaComponent,
    ContactoComponent,
    LoginComponent,
    CitaPrincipalComponent,
    CitasDetalleComponent,
    RegistroCitasComponent,
    PerfilComponent,
    ListaPacienteComponent,
    DetallePacienteComponent,
    AgregarPacienteComponent,
    DetalleDiarioComponent,
    PrincipalDiarioComponent,
    EmocionesDiarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    HomeComponent,
    GaleriaComponent,
    ContactoComponent,
    LoginComponent,
    CitaPrincipalComponent,
    CitasDetalleComponent,
    RegistroCitasComponent,
    PerfilComponent,
    ListaPacienteComponent,
    DetallePacienteComponent,
    AgregarPacienteComponent,
    DetalleDiarioComponent,
    PrincipalDiarioComponent,
    EmocionesDiarioComponent
  ]
})
export class PrincipalModule { }
