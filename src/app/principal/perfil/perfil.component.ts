import { Component } from '@angular/core';
import { Paciente } from './interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  user = {
    username: 'UsuarioEjemplo',
    email: 'usuario@ejemplo.com',
    phone: '',
    address: ''
  };

  constructor() {}

  ngOnInit(): void {
    // Aquí puedes cargar los datos del usuario desde un servicio
  }

  saveProfile(): void {
    // Lógica para guardar los cambios en el perfil
    console.log('Perfil guardado:', this.user);
  }

  deleteProfile(): void {
    // Lógica para eliminar el perfil
    console.log('Perfil eliminado');
  }
}
