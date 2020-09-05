
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: "root"
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  /**
   * Servicio que retorna por medio de un GET
   * un array de objestos con los paises
   */
  getAllCountrys(): Observable<any>{
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
  
}