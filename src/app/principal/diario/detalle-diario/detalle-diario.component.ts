import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-diario',
  templateUrl: './detalle-diario.component.html',
  styleUrl: './detalle-diario.component.css'
})
export class DetalleDiarioComponent {
  diario: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // Aquí debes recuperar el diario usando el id
    // Simulación de datos para ejemplo
    this.diario = {
      titulo: 'Diario Ejemplo',
      fecha: new Date(),
      descripcion: 'Descripción del diario.',
      emocion: 'Feliz'
    };
  }
}

