import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro-citas',
  templateUrl: './registro-citas.component.html',
  styleUrl: './registro-citas.component.css'
})
export class RegistroCitasComponent implements OnInit {
  selectedDate: string | null = null;
  appointmentForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.appointmentForm = this.fb.group({
      patientName: [''],
      appointmentTime: ['']
    });
  }

  goBack() {
    this.router.navigate(['/citaPrincipal']); // Navega a la vista principal
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedDate = params.get('date'); // Obtén la fecha seleccionada de la URL
    });
  }

  registerAppointment() {
    const formData = this.appointmentForm.value;
    console.log(`Cita registrada para ${formData.patientName} el ${this.selectedDate} a las ${formData.appointmentTime}`);
    // Lógica para registrar la cita...
    this.router.navigate(['/calendario']); // Navega de regreso al calendario
  }
}
