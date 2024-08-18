import { Paciente } from './../../perfil/interface';

import { Component, inject, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { Cita } from '../../../interfaces/cita';
import { PacienteService } from '../../../services/paciente.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detalle-paciente',
  templateUrl: './detalle-paciente.component.html',
  styleUrl: './detalle-paciente.component.css'
})
export class DetallePacienteComponent  implements OnInit {
  paciente?: Paciente
  idPaciente: number | null = null;
  pacienteService = inject(PacienteService);
  matSnackBar = inject(MatSnackBar);

  citas: Cita[] = [
    { fecha: '2024-08-12', hora: '09:00', descripcion: 'Revisión general' },
    { fecha: '2024-08-15', hora: '11:00', descripcion: 'Consulta especializada' },
    // Agrega más citas si es necesario
  ];

  editMode: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    // Obtener el parámetro de la ruta
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.idPaciente = id ? +id : null; // Convertir el id a número
      if (this.idPaciente) {
        this.pacienteService.getPaciente(this.idPaciente).subscribe({
          next: (response) => {

              console.log('paciente:', response);
              this.paciente = response; // Assuming `pacientes` is where you store the list
              this.paciente.edad = this.calcularEdad(this.paciente.fechaNacimiento);
              console.log('paciente obj:', response);
          },
          error: (error) => {
              this.matSnackBar.open(error.error.message, 'Close', {
                  duration: 5000,
                  horizontalPosition: 'center',
              });
          },
      });
        console.log('ID del paciente:', this.idPaciente);
      } else {
        console.error('ID de paciente no definido');
      }
    });
  }

  calcularEdad(fechaNacimiento?: Date ): number | null {
    if (!fechaNacimiento) return null;

    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const m = hoy.getMonth() - nacimiento.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }

    return edad;
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
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.idPaciente = id ? +id : null; // Convertir el id a número
      if (this.idPaciente) {
        this.pacienteService.deletePaciente(this.idPaciente).subscribe({
          next: (response) => {

            this.matSnackBar.open("Paciente Eliminado", 'Close', {
              duration: 5000,
              horizontalPosition: 'center',
            });
          },
          error: (error) => {
              this.matSnackBar.open(error.error.message, 'Close', {
                  duration: 5000,
                  horizontalPosition: 'center',
              });
          },
      });
        console.log('ID del paciente:', this.idPaciente);
      } else {
        console.error('ID de paciente no definido');
      }
    });
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
