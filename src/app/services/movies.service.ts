import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Movies } from '../interfaces/movies.interface';

const url = environment.ApiUrl + '/movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  constructor(private http: HttpClient) {}

  public getAllMovies(){
    return this.http.get<Movies[]>(url + "/findAll");
  }
}
