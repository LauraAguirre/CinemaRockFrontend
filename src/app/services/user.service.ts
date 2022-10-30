import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Peticion } from '../interfaces/peticion.interface';
import { User } from '../interfaces/user.interface';

const urlUser = 'https://cinemintic2022-prod.herokuapp.com/user';
@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) {}


  //METODOS VIEJOS

  /** 
  * @param username
  * @param password
  * @returns
  */
  public login(email: string, password: string) {
    return this.http.post<User>(urlUser + '/autenticar', { email, password })
      .pipe(map(user => {
          localStorage.setItem('user', JSON.stringify(user));
          return user;
      }));
  }

  /**
   * 
   * @param user 
   * @returns 
   */
  public register(user: User) {
    return this.http.post<Peticion>(urlUser + '/crear-usuario',  user);
  }

  /**
   * 
   * @param user 
   * @returns 
   */
  public update(user: User) {
    return this.http.post<Peticion>(urlUser + '/actualizar-usuario',  user);
  }

}
