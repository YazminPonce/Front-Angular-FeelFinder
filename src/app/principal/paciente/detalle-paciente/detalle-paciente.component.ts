
import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../../perfil/interface';
import { Cita } from '../../../interfaces/cita';


@Component({
  selector: 'app-detalle-paciente',
  templateUrl: './detalle-paciente.component.html',
  styleUrl: './detalle-paciente.component.css'
})
export class DetallePacienteComponent  implements OnInit {
  paciente: Paciente = {
    id: 1,
    nombre: 'Juan Pérez',
    edad: 30,
    email: 'juan.perez@example.com'
  };

  citas: Cita[] = [
    { fecha: '2024-08-12', hora: '09:00', descripcion: 'Revisión general' },
    { fecha: '2024-08-15', hora: '11:00', descripcion: 'Consulta especializada' },
    // Agrega más citas si es necesario
  ];

  editMode: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Aquí podrías cargar los datos del paciente y sus citas desde un servicio
  }

  activarEdicion(): void {
    this.editMode = true;
  }

  cancelarEdicion(): void {
    this.editMode = false;
  }

  guardarCambios(): void {
    // Implementa la lógica para guardar los cambios del paciente
    console.log('Guardar cambios del paciente:', this.paciente);
    // Luego, puedes desactivar el modo de edición
    this.editMode = false;
  }

  eliminarPaciente(): void {
    // Implementa la lógica para eliminar la información del paciente
    console.log('Eliminar paciente:', this.paciente);
    // Luego, puedes redirigir a la lista de pacientes después de eliminar
    this.router.navigate(['/paciente']);
  }

  agregarCita(): void {
    // Implementa la lógica para agregar una nueva cita
    console.log('Agregar nueva cita');
    // Podrías redirigir a un formulario para agregar la cita
  }

  volverALaLista(): void {
    this.router.navigate(['/paciente']);
  }
}
