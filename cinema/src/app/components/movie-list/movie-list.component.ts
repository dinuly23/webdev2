import { movies } from '../../models/movie.mock-data';
import { Movie } from '../../models/movie.interface';
import { Component, OnInit, TemplateRef, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnChanges {
  movies: Movie[] = movies;
  filteredMovies: Movie[] = [];
  searchQuery: string = '';

  constructor(private router: Router) {
    this.filteredMovies = this.movies;
  }

  ngOnChanges() {
    this.filteredMovies = this.movies;
  }

  filterMovies() {
    if (this.searchQuery) {
      this.filteredMovies = this.movies.filter(movie =>
        movie.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredMovies = this.movies;
    }
  }
  
}
