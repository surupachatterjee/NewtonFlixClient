import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/Result';
import { Movie } from '../../models/Movie';
import { MovieService }  from '../../services/movie.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  defaultMovie= 'newton';
  searchMovie: string 
  searchedMovie: string ;
  errMessage: string;
  movies: Movie[];
  moviesFound: Movie[];
  showAlert = false;
  results:Result;
  hidePrevious: boolean;
  hideNext: boolean;
  totalPages:Number;


  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.search();
  }

  search(movie=this.defaultMovie,pageNum=1) {
    console.log(movie,pageNum);
    movie = movie === '' ? this.defaultMovie: movie;
    this.movieService.getMovies(movie, pageNum)
    .subscribe(moviesFound => {
      console.log(moviesFound);
      this.movies = moviesFound.movies;
      this.searchedMovie = movie;
      this.results = moviesFound;
      if(pageNum===1){
        this.totalPages = Number(this.results.totalPages);
      }
      this.hidePrevious = Number(this.results.currentPage) === 1;
      console.log(this.hidePrevious)
      this.hideNext = Number(this.results.currentPage) === this.totalPages;
    },
      (err) => {
        this.showAlert = true;
        this.errMessage = err.error;        
      }
      )
  
  }

  previous(){
     
    this.search(this.searchedMovie,Number(this.results.currentPage)-1);
  }

  next(){
    this.search(this.searchedMovie,Number(this.results.currentPage)+1);
  }

  dismissAlert() {
    this.showAlert = false;
    this.searchMovie = '';
    this.search();
  }

}
