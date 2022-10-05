import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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

  constructor(private fb: FormBuilder,) {
    this.movie1 = '/assets/img/movies/m2.jpg';
    this.movie2 = '/assets/img/movies/m3.jpg';
    this.movie3 = '/assets/img/movies/m5.jpg';
    this.movie4 = '/assets/img/movies/m6.jpg';
    this.movie5 = '/assets/img/movies/m7.jpg';

    this.userProfileForm = this.fb.group({
      email: new FormControl ('', {validators: [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]}),
      password: new FormControl ('', {validators: [Validators.required, Validators.minLength(6)]}),
    });
  }

  ngOnInit(): void {}
}
