import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cita-principal',
  templateUrl: './cita-principal.component.html',
  styleUrls: ['./cita-principal.component.css']
})
export class CitaPrincipalComponent {
  title = 'angular-calendar';

  constructor(private router: Router) {} // Inyecta el enrutador

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    events: [
      { id: '1', title: 'Cita Pendiente', date: '2024-08-10', backgroundColor: '#ffcccc' },
      { id: '2', title: 'Cita Aceptada', date: '2024-08-15', backgroundColor: '#ccffcc' },
      // Add more events as needed
    ],
    eventClick: this.handleEventClick.bind(this) // Maneja el clic en el evento
  };

  handleEventClick(info: any) {
    const eventId = info.event.id; // Obtén el ID del evento
    this.router.navigate(['/detalle-cita', eventId]); // Navega al componente de detalle
  }
}
