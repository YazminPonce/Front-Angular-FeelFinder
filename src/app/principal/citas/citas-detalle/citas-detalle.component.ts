import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-citas-detalle',
  templateUrl: './citas-detalle.component.html',
  styleUrl: './citas-detalle.component.css'
})

export class CitasDetalleComponent implements OnInit {
  citaId: string | null = null;
  citaEstado: string = 'en espera'; // Estado de la cita (puede ser 'en espera', 'aceptada', etc.)
  reprogramarForm!: FormGroup; // Debe ser de tipo FormGroup
  showReprogramar: boolean = false; // Controla la visibilidad del formulario

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    // Inicialización correcta del FormGroup
    this.reprogramarForm = this.fb.group({
      nuevaFecha: [''],
      nuevaHora: ['']
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.citaId = params.get('id'); // Obtén el ID de la URL
      // Usa el ID para cargar los detalles de la cita
      // Configura el estado de la cita según los datos cargados
    });
  }

  goBack() {
    this.router.navigate(['/citaPrincipal']); // Navega a la vista principal
  }

  toggleReprogramar() {
    this.showReprogramar = !this.showReprogramar;
  }

  reprogramar() {
    const nuevaFecha = this.reprogramarForm.value.nuevaFecha;
    const nuevaHora = this.reprogramarForm.value.nuevaHora;
    // Lógica para actualizar la cita con la nueva fecha y hora
    console.log(`Reprogramar cita ${this.citaId} a ${nuevaFecha} ${nuevaHora}`);
    // Navega de regreso al calendario o muestra un mensaje de éxito
    this.goBack();
  }
}
