import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Router } from '@angular/router';
import { PacienteService } from '../../../services/paciente.service'; // Servicio para obtener citas

@Component({
  selector: 'app-cita-principal',
  templateUrl: './cita-principal.component.html',
  styleUrls: ['./cita-principal.component.css']
})
export class CitaPrincipalComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    events: [],
    eventClick: this.handleEventClick.bind(this),
    dateClick: this.handleDateClick.bind(this)
  };

  constructor(private router: Router, private citaService: PacienteService) {}

  ngOnInit() {
    this.citaService.getCitas().subscribe((citas: any[]) => {
      this.calendarOptions.events = citas.map(cita => ({
        id: cita.id,
        title: cita.title,
        date: cita.date,
        backgroundColor: cita.status === 'Aceptada' ? '#ccffcc' : '#ffcccc',
        textColor: '#000000',
      }));
    });
  }

  handleEventClick(info: any) {
    const eventId = info.event.id;
    this.router.navigate(['/detalle-cita', eventId]);
  }

  handleDateClick(info: any) {
    const selectedDate = info.dateStr;
    this.router.navigate(['/registrar-cita', selectedDate]);
  }
}
