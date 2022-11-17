import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-remember-password',
  templateUrl: './remember-password.component.html',
  styleUrls: ['./remember-password.component.css'],
})
export class RememberPasswordComponent implements OnInit {
  movie1: string;
  movie2: string;
  movie3: string;
  movie4: string;
  movie5: string;
  userProfileForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
    ) {
    this.movie1 = '/assets/img/movies/m2.jpg';
    this.movie2 = '/assets/img/movies/m3.jpg';
    this.movie3 = '/assets/img/movies/m5.jpg';
    this.movie4 = '/assets/img/movies/m6.jpg';
    this.movie5 = '/assets/img/movies/m7.jpg';
    

    this.userProfileForm = this.fb.group({
//      email: new FormControl ('', {validators: [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]}),
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  onUpdatePassword(){
    this.loading = true;
    this.submitted = true;
    const newPass = JSON.parse(localStorage.getItem('user')!);
    newPass.password = this.userProfileForm.get('password')?.value;
    newPass.confirmpassword = this.userProfileForm.get('confirmpassword')?.value;
    console.log(newPass);
    this.userService.update(newPass).subscribe({
      next: (data) => {
        console.log('Aqui perfil', data);
        if (data.ok) {
          localStorage.setItem('user', JSON.stringify(data));
          Swal.fire({
            title: '¡Información Actualizada!',
            text: 'Tus datos han sido actualizados',
            icon: 'success',
            confirmButtonColor: '#a4161a',
            confirmButtonText: 'Aceptar',
          }).then(async (result) => {
            if (result.isConfirmed) {
              this.router.navigate(['']);
            } else {
              this.router.navigate(['/profile']);
            }
          });
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error Profile', error);
        this.loading = false;
      },
    });

  }
}
