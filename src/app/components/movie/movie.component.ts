import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie';
import { MovieService }  from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  searchMovie: string = 'newton';
  errMessage: string;
  movies: Movie[];
  moviesFound: Movie[];
  showAlert = false;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
      this.movieService.getMovies('newton').subscribe(moviesFound => {
        this.moviesFound = moviesFound;
        this.movies = moviesFound;
      })
  }

  search() {
    console.log(this.searchMovie);
    if (this.searchMovie !== '' && this.searchMovie !== 'newton') {
      this.movieService.getMovies(this.searchMovie)
      .subscribe(moviesFound => {
        console.log(moviesFound);
        this.movies = moviesFound;
      },
      (err) => {
        // alert(err.error);
        this.showAlert = true;
        this.errMessage = err.error;
        
      }
      )
    }
    else if (this.searchMovie === ''){
      this.movies = this.moviesFound;
    }
  }

  dismissAlert() {
    this.showAlert = false;
    this.searchMovie = '';
    this.movies = this.moviesFound;
  }

}
