import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { movies } from '../../models/movie.mock-data';
import { Movie } from '../../models/movie.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit  {
  sub: any;
  movie: Movie | undefined;
  similarMovies: Movie[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.movie = movies.find(movie => movie.id.toString() === id);
      this.similarMovies = movies.filter( movie =>{
        if (movie === this.movie) return false;
        let similar : boolean = false;
        movie.genres.forEach(genre => {
          if (this.movie && this.movie.genres.indexOf(genre) != -1) {
            similar = true;
          }
        });
        return similar;
      });
    })
  }

  goBack(): void {
    this.location.back();
  }
}
