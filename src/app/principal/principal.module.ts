import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // FullCalendar module
import { CitaPrincipalComponent } from './citas/cita-principal/cita-principal.component';
import { ListaPacienteComponent } from './paciente/lista-paciente/lista-paciente.component';
import { DetallePacienteComponent } from './paciente/detalle-paciente/detalle-paciente.component';
import { AgregarPacienteComponent } from './paciente/agregar-paciente/agregar-paciente.component';
import { PrincipalDiarioComponent } from './diario/principal-diario/principal-diario.component';
import { EmocionesDiarioComponent } from './diario/emociones-diario/emociones-diario.component';
import { DetalleDiarioComponent } from './diario/detalle-diario/detalle-diario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CitasDetalleComponent } from './citas/citas-detalle/citas-detalle.component';
import { RegistroCitasComponent } from './citas/registro-citas/registro-citas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DiarioPrincipalComponent } from './diario/diario-principal/diario-principal.component';

@NgModule({ declarations: [
        HomeComponent,
        GaleriaComponent,
        ContactoComponent,
        LoginComponent,
        CitaPrincipalComponent,
        CitasDetalleComponent,ListaPacienteComponent,
        RegistroCitasComponent,
        CitasDetalleComponent,
        PerfilComponent,
        DiarioPrincipalComponent,
        DetallePacienteComponent,
        AgregarPacienteComponent,
        DetalleDiarioComponent,
        PrincipalDiarioComponent,
        EmocionesDiarioComponent
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
        DiarioPrincipalComponent,
        ListaPacienteComponent,
        DetallePacienteComponent,
        AgregarPacienteComponent,
        DetalleDiarioComponent,
        PrincipalDiarioComponent,
        EmocionesDiarioComponent
    ], imports: [CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        FullCalendarModule,
      ], providers: [provideHttpClient(withInterceptorsFromDi())] })

export class PrincipalModule   {

}
