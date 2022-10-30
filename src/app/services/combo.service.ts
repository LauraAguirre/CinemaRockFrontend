import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Combos } from '../interfaces/combos.interface';

const url = environment.ApiUrl + '/combos';
@Injectable({
  providedIn: 'root',
})
export class ComboService {
  constructor( private http: HttpClient) {}

  public buscarCombos() {
    return this.http.get<Combos[]>(url + '/findAll');
  }
}
