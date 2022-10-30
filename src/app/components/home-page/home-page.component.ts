import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/movies.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  banner1: string;
  banner2: string;
  banner3: string;

  movies: Movies[];
  premieres: Movies[];

  constructor(private moviesService: MoviesService) {
    this.banner1 = '/assets/img/banners/banner1.png';
    this.banner2 = '/assets/img/banners/banner2.jpg';
    this.banner3 = '/assets/img/banners/banner3.jpg';

    this.movies = [];
    this.premieres = [];
  }

  ngOnInit(): void {
    this.moviesService.getAllMovies().subscribe((data) => {
      const films = data;
      films.forEach((element) => {
        if(element['type'] == 'billboard')
        {
          this.movies.push(element);
        }
        else if(element['type']  == 'premiere')
        {
         this.premieres.push(element);
        }
        else
        {
          console.log("Error Al Cargar las peliculas")
        }
      });
    });
  }
}
