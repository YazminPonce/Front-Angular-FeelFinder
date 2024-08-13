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
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { CitaPrincipalComponent } from './citas/cita-principal/cita-principal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { CitasDetalleComponent } from './citas/citas-detalle/citas-detalle.component';
import { RegistroCitasComponent } from './citas/registro-citas/registro-citas.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DiarioPrincipalComponent } from './diario/diario-principal/diario-principal.component';

@NgModule({ declarations: [
        HomeComponent,
        GaleriaComponent,
        ContactoComponent,
        LoginComponent,
        CitaPrincipalComponent,
        CitasDetalleComponent,
        RegistroCitasComponent,
        CitasDetalleComponent,
        PerfilComponent,
        DiarioPrincipalComponent
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
        DiarioPrincipalComponent
    ], imports: [CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        FullCalendarModule,
      ], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class PrincipalModule   {


}
