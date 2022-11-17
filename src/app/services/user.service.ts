import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Peticion } from '../interfaces/peticion.interface';
import { User } from '../interfaces/user.interface';

const urlUser = environment.ApiUrl + '/user';
@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) {}

 //public buscarUsuarios(){
 //   return this.http.get<User[]>(urlUser + "/findAll");
 // }

  //METODOS VIEJOS

  /** 
  * @param username
  * @param password
  * @returns
  */
  public login(email: string, password: string) {
    return this.http.post<User>(urlUser + '/signin', { email, password })
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
    const puto = { 
      genre: user.genre,
      lastname: user.lastname, 
      name: user.name,       
      email: user.email,
      address: user.address,
      phone: user.phone,
      password: user.password,
      confirmpassword: user.confirmpassword
    };

    console.log(puto);
    return this.http.post<Peticion>(urlUser + '/save',  user);
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
