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

  constructor(private router: Router) {}

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    events: [
      { id: '1', title: 'Cita Pendiente', date: '2024-08-10', backgroundColor: '#ffcccc', textColor: '#000000'  },
      { id: '2', title: 'Cita Aceptada', date: '2024-08-15', backgroundColor: '#ccffcc', textColor: '#000000'  },
      // Agrega más eventos si es necesario
    ],
    eventClick: this.handleEventClick.bind(this), // Maneja el clic en el evento
    dateClick: this.handleDateClick.bind(this) // Maneja el clic en la fecha
  };

  handleEventClick(info: any) {
    const eventId = info.event.id; // Obtén el ID del evento
    this.router.navigate(['/detalle-cita', eventId]); // Navega al componente de detalle de la cita
  }

  handleDateClick(info: any) {
    const selectedDate = info.dateStr; // Obtén la fecha seleccionada
    this.router.navigate(['/registrar-cita', selectedDate]); // Navega al componente de registro de citas con la fecha seleccionada
  }
}
