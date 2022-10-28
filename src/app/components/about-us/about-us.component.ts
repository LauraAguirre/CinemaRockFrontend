import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  banner1: string;
  banner2: string;
  banner3: string;

  foto1: string;
  foto2: string;

  LauraR:string;
  LauraA:string;
 

  constructor() {
    this.banner1 = '/assets/img/banners/banner1.png';
    this.banner2 = '/assets/img/banners/banner2.jpg';
    this.banner3 = '/assets/img/banners/banner3.jpg';

    this.foto1 = '/assets/img/aboutUs/cineFoto1.jpg';
    this.foto2 = '/assets/img/aboutUs/cineFoto2.jpg';

    this.LauraR = '/assets/img/aboutUs/lauraR.jpeg';
    this.LauraA = '/assets/img/aboutUs/lauraA.jpeg';
 
  }

  ngOnInit(): void {
  }

}
