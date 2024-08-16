import { Paciente } from './../../../interfaces/paciente';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { animate, style, transition, trigger } from '@angular/animations';
import { ApiService } from '../../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UpdatePacienteDto } from '../../../interfaces/UpdatePacienteDto';
import { EditarPacienteComponent } from '../../modals/editar-paciente/editar-paciente.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css'],
  animations: [
    trigger('transitionMessages', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ListaPacienteComponent implements OnInit {

  authService = inject(ApiService);
  matSnackBar = inject(MatSnackBar);
  routerr = inject(Router);
  hide = true;
  form!: FormGroup;
  fb = inject(FormBuilder);

  pacientes: Paciente[]= [];
  paginatedPacientes: Paciente[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 5;
  totalPages: number = Math.ceil(this.pacientes.length / this.pageSize);

  pacienteSeleccionado?: Paciente;

  constructor(private router: Router) {}

  ngOnInit() {
    this.listaPacientePsicologo();
    this.applyFilter(); // Inicializa la lista de pacientes con paginación y filtro
  }



  applyFilter() {
    const filterValue = this.searchTerm.toLowerCase();
    const filteredPacientes = this.pacientes.filter(paciente =>
      paciente.nombre.toLowerCase().includes(filterValue) ||
      paciente.edad!.toString().includes(filterValue) ||
      paciente.email.toLowerCase().includes(filterValue)
    );

    this.totalPages = Math.ceil(filteredPacientes.length / this.pageSize);
    this.setPage(this.currentPage, filteredPacientes);
  }

  setPage(page: number, filteredPacientes: Paciente[] = this.pacientes) {
    this.currentPage = page;
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.paginatedPacientes = filteredPacientes.slice(startIndex, startIndex + this.pageSize);
  }

  seleccionarPaciente(paciente: Paciente) {
    if (paciente && paciente.idPaciente) {
      this.router.navigate(['/detalle-paciente', paciente.idPaciente]);
    } else {
      console.error('Paciente o ID de paciente no definido:', paciente);
      // Manejar el error de forma adecuada
    }
  }


  nuevaPaciente() {

    this.router.navigate(['/agregar']);
  }

  getPagesArray() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }


  listaPacientePsicologo() {
    const id = 1; // Replace with the actual ID you want to pass
    this.authService.getPacientePsicologo().subscribe({
        next: (response) => {
            console.log('Lista de pacientes:', response);
            this.pacientes = response; // Assuming `pacientes` is where you store the list
            this.pacientes.forEach(element => {
              element.edad = this.calcularEdad(element.fechaNacimiento);
            });
            console.log(this.pacientes)
            this.applyFilter(); // Refresh the list if necessary
        },
        error: (error) => {
            this.matSnackBar.open(error.error.message, 'Close', {
                duration: 5000,
                horizontalPosition: 'center',
            });
        },
    });
}


//aqui iba

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

// Método para editar paciente
asdasd(id: number) {
  // Navegar a la página de edición o abrir un modal de edición
  console.log('Editar paciente con ID:', id);
  // Ejemplo: this.router.navigate(['/editar', id]);
}

// Método para eliminar paciente
eliminarPaciente(id: number) {
  if (confirm('¿Estás seguro de que quieres eliminar este paciente?')) {
    // Lógica para eliminar el paciente
    console.log('Eliminar paciente con ID:', id);
    // Ejemplo: this.pacienteService.eliminarPaciente(id).subscribe(...);
  }
}


}
