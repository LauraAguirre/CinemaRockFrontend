import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  userProfileForm: FormGroup;

  banner1: string;
  banner2: string;
  banner3: string;
  imgMercadoPago: String;
  imgTransferencia: String;
  loading = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.banner1 = '/assets/img/banners/banner1.png';
    this.banner2 = '/assets/img/banners/banner2.jpg';
    this.banner3 = '/assets/img/banners/banner3.jpg';
    this.imgMercadoPago = '/assets/img/payment/mercadoPago.png';
    this.imgTransferencia = '/assets/img/payment/Bancolombia-nequi.png';

    this.userProfileForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(7)]],
      id: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.obtener();
  }

  /**Validar existencia de usuario */
  obtener() {
    const profile = JSON.parse(localStorage.getItem('user')!);
    this.f['name'].setValue(profile.user.name);
    this.f['lastName'].setValue(profile.user.lastName);
    this.f['email'].setValue(profile.user.email);
    this.f['address'].setValue(profile.user.address);
    this.f['phone'].setValue(profile.user.phone);
    this.f['id'].setValue(profile.user.id);
  }

  get f() {
    return this.userProfileForm.controls;
  }

  submit() {
    const profile = JSON.parse(localStorage.getItem('user')!);
    Swal.fire({
      title: 'Gracias',
      text: profile.user.name + ' ' + 'tu compra ha sido realizada, disfruta tu función',
      icon: 'success',
      confirmButtonColor: '#a4161a',
      confirmButtonText: "Aceptar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        this.router.navigate(['']);
      } else {
        this.router.navigate(['/payment']);
      }
    });
  }
}
