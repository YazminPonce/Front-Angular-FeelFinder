import { Component } from '@angular/core';
import { Paciente } from './interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  pacientes: Paciente[] = [
    { id: 1, nombre: 'Juan Pérez', edad: 30, email: 'juan.perez@example.com' },
    { id: 2, nombre: 'Ana Gómez', edad: 25, email: 'ana.gomez@example.com' },
    { id: 3, nombre: 'Luis Fernández', edad: 40, email: 'luis.fernandez@example.com' },
    // Agrega más pacientes si es necesario
  ];

  pacienteSeleccionado?: Paciente;

  seleccionarPaciente(paciente: Paciente) {
    this.pacienteSeleccionado = paciente;
  }
}
