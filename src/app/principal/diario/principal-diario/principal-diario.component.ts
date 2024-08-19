import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DiariosPaciente } from '../../../interfaces/entrada';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-principal-diario',
  templateUrl: './principal-diario.component.html',
  styleUrls: ['./principal-diario.component.css']
})
export class PrincipalDiarioComponent implements OnInit {
  authService = inject(ApiService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);
  hide = true;
  form!: FormGroup;
  fb = inject(FormBuilder);

  selectedDate: string | null = null;
  diarios: DiariosPaciente[] = [];
  filteredDiarios: DiariosPaciente[] = [];
  idPaciente: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.listadiario();
    this.filterByDate();
  }

  filterByDate(): void {
    console.log('Fecha seleccionada:', this.selectedDate);
    console.log('Diarios sin filtrar:', this.diarios);

    if (this.selectedDate) {
      const selected = new Date(this.selectedDate);
      selected.setDate(selected.getDate() + 1); // Agregar un día
      this.filteredDiarios = this.diarios.filter(diario => {
        const diarioFecha = new Date(diario.fecha);
        console.log(diarioFecha);
        console.log('Comparando:', diarioFecha.toDateString(), 'con', selected.toDateString());
        return diarioFecha.toDateString() === selected.toDateString();
      });
    } else {
      const today = new Date();
      const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
      startOfWeek.setHours(0, 0, 0, 0);

      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      endOfWeek.setHours(23, 59, 59, 999);

      console.log('Filtrando desde:', startOfWeek, 'hasta:', endOfWeek);

      this.filteredDiarios = this.diarios.filter(diario => {
        const diarioFecha = new Date(diario.fecha);
        return diarioFecha >= startOfWeek && diarioFecha <= endOfWeek;
      });
    }

    console.log('Diarios filtrados:', this.filteredDiarios);
  }


  verDetalleDiario(id: number): void {
    this.router.navigate(['/detalle-diario', id]);
  }

  listadiario() {
    // Obtener el parámetro de la ruta
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.idPaciente = id ? +id : null; // Convertir el id a número
      if (this.idPaciente) {
    this.authService.getListaDiarios(this.idPaciente).subscribe({
      next: (response) => {
        console.log('Lista de diarios:', response);
        this.diarios = response;
        this.filterByDate(); // Apply the filter after loading the data
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
}
