import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-diario',
  templateUrl: './principal-diario.component.html',
  styleUrl: './principal-diario.component.css'
})
export class PrincipalDiarioComponent  implements OnInit {
  selectedDate: string | null = null;
  diarios = [
    { id: 1,titulo: 'Diario Lunes', fecha: new Date('2024-08-12'), descripcion: 'Contenido del diario de lunes.' },
    { id: 2,titulo: 'Diario Martes', fecha: new Date('2024-08-13'), descripcion: 'Contenido del diario de martes.' },
    { id: 3,titulo: 'Diario Miércoles', fecha: new Date('2024-08-14'), descripcion: 'Contenido del diario de miércoles.' },
    { id: 4,titulo: 'Diario Jueves', fecha: new Date('2024-08-15'), descripcion: 'Contenido del diario de jueves.' },
    { id: 5,titulo: 'Diario Viernes', fecha: new Date('2024-08-16'), descripcion: 'Contenido del diario de viernes.' },
  ];

  filteredDiarios = this.diarios;

  constructor() {}

  ngOnInit(): void {
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
      this.filteredDiarios = this.diarios;
    }
  }
}

