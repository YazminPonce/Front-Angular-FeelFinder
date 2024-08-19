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
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EditarPacienteComponent } from './modals/editar-paciente/editar-paciente.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { DiarioDetalleComponent } from './diario/diario-detalle/diario-detalle.component';

registerLocaleData(localeEs, 'es');
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
        DetalleDiarioComponent,
        PrincipalDiarioComponent,
        EmocionesDiarioComponent,
        EditarPacienteComponent,
        DiarioDetalleComponent
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
        DetalleDiarioComponent,
        PrincipalDiarioComponent,
        EmocionesDiarioComponent
    ], imports: [CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        FullCalendarModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
      ], providers: [provideHttpClient(withInterceptorsFromDi()),{ provide: LOCALE_ID, useValue: 'es' }] })

export class PrincipalModule   {

}
