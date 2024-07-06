import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { IPiyama } from '../principal/galeria/interfaces/piyama';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _endpoint: string = environment.endPoint;
  private _apiUrl: string = this._endpoint + "Piyamas"; // Ajusta esta URL según la estructura de tu API

  constructor(private http: HttpClient) { }

  getProductos(): Observable<IPiyama[]> {
    return this.http.get<IPiyama[]>(`${this._apiUrl}/ListaPiyama`);
  }
}
