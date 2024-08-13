import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from '../../interface/IPaciente';
import { animate, style, transition, trigger } from '@angular/animations';

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
  pacientes: Paciente[] = [
    { id: 1, nombre: 'Juan Pérez', edad: 30, email: 'juan.perez@example.com' },
    { id: 2, nombre: 'Ana Gómez', edad: 25, email: 'ana.gomez@example.com' },
    { id: 3, nombre: 'Luis Fernández', edad: 40, email: 'luis.fernandez@example.com' },
    { id: 4, nombre: 'Marta Sanchez', edad: 30, email: 'marta.sanchez@example.com' },
    { id: 5, nombre: 'Carolina Montes', edad: 25, email: 'carolina.montes@example.com' },
    { id: 6, nombre: 'Junit Kim', edad: 40, email: 'junit.kim@example.com' },
    { id: 7, nombre: 'Juan Pérez', edad: 30, email: 'juan.perez@example.com' },
    { id: 8, nombre: 'Natalia Lopez', edad: 25, email: 'natalia.lopez@example.com' },
    { id: 9, nombre: 'Carmen Luz', edad: 40, email: 'carmen.luz@example.com' },
    { id: 10, nombre: 'Tereza Martinez', edad: 30, email: 'tereza.martinez@example.com' },
    { id: 11, nombre: 'Jose Luis', edad: 25, email: 'jose.luis@example.com' },
    { id: 12, nombre: 'Ulises Monte', edad: 40, email: 'ulises.monte@example.com' }
    // Agrega más pacientes si es necesario
  ];
  paginatedPacientes: Paciente[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 5;
  totalPages: number = Math.ceil(this.pacientes.length / this.pageSize);

  pacienteSeleccionado?: Paciente;

  constructor(private router: Router) {}

  ngOnInit() {
    this.applyFilter(); // Inicializa la lista de pacientes con paginación y filtro
  }

  applyFilter() {
    const filterValue = this.searchTerm.toLowerCase();
    const filteredPacientes = this.pacientes.filter(paciente =>
      paciente.nombre.toLowerCase().includes(filterValue) ||
      paciente.edad.toString().includes(filterValue) ||
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
    this.router.navigate(['/detalle-paciente', paciente.id]);
  }


  nuevaPaciente() {

    this.router.navigate(['/agregar']);
  }

  getPagesArray() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
