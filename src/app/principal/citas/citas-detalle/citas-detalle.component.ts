import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../../../services/paciente.service'; // Servicio para manejar citas

@Component({
  selector: 'app-citas-detalle',
  templateUrl: './citas-detalle.component.html',
  styleUrls: ['./citas-detalle.component.css']
})
export class CitasDetalleComponent implements OnInit {
  citaId: string | null = null;
  citaEstado: string = ''; // Estado de la cita
  reprogramarForm: FormGroup;
  showReprogramar: boolean = false;
  citaDetails: any = {}; // Detalles de la cita

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private citaService: PacienteService
  ) {
    this.reprogramarForm = this.fb.group({
      nuevaFecha: [''],
      nuevaHora: ['']
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.citaId = params.get('id');
      this.loadCitaDetails(); // Carga los detalles de la cita
    });
  }

  loadCitaDetails() {
    if (this.citaId) {
      this.citaService.getCitaById(this.citaId).subscribe((cita: any) => {
        console.log(cita);
        this.citaDetails = cita;
        this.citaEstado = cita.estatus;
      });
    }
  }

  goBack() {
    this.router.navigate(['/citaPrincipal']);
  }

  toggleReprogramar() {
    this.showReprogramar = !this.showReprogramar;
  }

  reprogramar() {
    const nuevaFecha = this.reprogramarForm.value.nuevaFecha;
    const nuevaHora = this.reprogramarForm.value.nuevaHora;

    if (this.citaId) {
      this.citaService.reprogramarCita(this.citaId, nuevaFecha, nuevaHora).subscribe(() => {
        console.log(`Cita ${this.citaId} reprogramada a ${nuevaFecha} ${nuevaHora}`);
        this.goBack(); // Navegar de regreso al calendario después de reprogramar
      });
    }
  }

  aceptarCita() {
    if (this.citaId) {
      this.citaService.aceptarCita(this.citaId).subscribe(
        () => {
          console.log('Cita aceptada exitosamente');
          window.location.reload(); // Recarga la página
          this.loadCitaDetails(); // Actualiza los detalles de la cita después de aceptarla
        },
        (error) => {
          window.location.reload(); // Recarga la página
          console.error('Error al aceptar la cita', error);
        }
      );
    }
  }

}
