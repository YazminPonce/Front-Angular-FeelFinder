import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Entrada } from '../../../interfaces/diario';
import { Location } from '@angular/common';

@Component({
  selector: 'app-diario-detalle',
  templateUrl: './diario-detalle.component.html',
  styleUrls: ['./diario-detalle.component.css']
})
export class DiarioDetalleComponent implements OnInit {
  authService = inject(ApiService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  hide = true;
  form!: FormGroup;
  fb = inject(FormBuilder);
  diario!: Entrada;  // Changed to a single Entrada instead of an array
  location = inject(Location);
  ngOnInit(): void {
    this.obtenerDetalleDiario();
  }

  obtenerDetalleDiario() {
    // Obtén el ID del parámetro de la ruta
    this.activatedRoute.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      this.authService.getDiario(id).subscribe({
        next: (response) => {
          console.log('Detalle del diario:', response);
          this.diario = response;
        },
        error: (error) => {
          this.matSnackBar.open(error.error.message, 'Cerrar', {
            duration: 5000,
            horizontalPosition: 'center',
          });
        },
      });
    });
  }

  parseFecha(fechaString: string): Date {
    return new Date(fechaString);
  }

  // Método para formatear la fecha
  formatFecha(fechaString: string): string {
    const fecha = this.parseFecha(fechaString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long', // "Monday"
      day: 'numeric',  // "8"
      month: 'long',   // "August"
      year: 'numeric'  // "2024"
    };
    return new Intl.DateTimeFormat('es-ES', options).format(fecha);
  }
  goBack() {
    this.router.navigate(['/diario']); // Navega a la vista principal
  }
}
