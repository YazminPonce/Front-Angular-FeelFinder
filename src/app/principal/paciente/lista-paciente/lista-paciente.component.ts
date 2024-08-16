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


  listaPacientePsicologo() {
    const id = 1; // Replace with the actual ID you want to pass
    this.authService.getPacientePsicologo(id).subscribe({
        next: (response) => {
            console.log('Lista de pacientes:', response);
            this.pacientes = response; // Assuming `pacientes` is where you store the list
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


}
