import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IPiyama } from './interfaces/piyama';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  piyamalista: IPiyama[] = [];
  filtradoPiyamalista: IPiyama[] = [];
  isResultLoads = false;
  nombreProducto: string = "";
  categoriaSeleccionada: number | null = null;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
  }

  filtrarProductos() {
    const filtro = this.nombreProducto.toLowerCase();
    this.filtradoPiyamalista = this.piyamalista.filter(producto =>
      producto.nombre.toLowerCase().includes(filtro) &&
      (this.categoriaSeleccionada === null || producto.idCategoria === this.categoriaSeleccionada)
    );
  }

  filtrarCategoria(idCategoria: number) {
    this.categoriaSeleccionada = idCategoria;

    this.filtrarProductos();
  }

  Todos() {
    this.categoriaSeleccionada = null;
    this.filtrarProductos();
  }
}
