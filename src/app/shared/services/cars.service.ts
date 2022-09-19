import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CarsDTO } from '../dtos/CarsDTO';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private http: HttpClient) {}

  getCars(brand: number): Observable<CarsDTO> {
    const url = `${environment.API_URL}/v1/carros/marcas/${brand}/modelos`;
    return this.http.get<CarsDTO>(url);
  }
}
