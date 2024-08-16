import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Entrada } from '../../../interfaces/diario';
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
  diarios: Entrada[] = [];
  filteredDiarios: Entrada[] = [];

  constructor() {}

  ngOnInit(): void {
    this.listadiario();
    this.filterByDate();
  }

  filterByDate(): void {
    if (this.selectedDate) {
      const selected = new Date(this.selectedDate);
      this.filteredDiarios = this.diarios.filter(diario => {
        const diarioFecha = new Date(diario.fecha);
        return diarioFecha.toDateString() === selected.toDateString();
      });
    } else {
      const today = new Date();
      const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
      startOfWeek.setHours(0, 0, 0, 0); // Ajustar al inicio del día

      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      endOfWeek.setHours(23, 59, 59, 999); // Ajustar al final del día

      this.filteredDiarios = this.diarios.filter(diario => {
        const diarioFecha = new Date(diario.fecha);
        return diarioFecha >= startOfWeek && diarioFecha <= endOfWeek;
      });
    }
  }

  verDetalleDiario(id: number): void {
    this.router.navigate(['/detalle-diario', id]);
  }

  listadiario() {
    const id = 1; // Replace with the actual ID you want to pass
    this.authService.getListaDiarios(id).subscribe({
      next: (response) => {
        console.log('Lista de pacientes:', response);
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
  }
}
