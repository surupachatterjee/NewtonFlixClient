import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  searchMovie: string;
  movies: Movie[];

  constructor() { }

  ngOnInit() {
      this.movies = [
        {
          "Title": "U2: Rattle and Hum",
          "Year": "1988",
          "imdbID": "tt0096328",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4MDYzNzQ4NF5BMl5BanBnXkFtZTcwMjAxODEzMQ@@._V1_SX300.jpg",
          "imDBLink": "https://www.imdb.com//title/tt0096328"
      },
      {
          "Title": "Hum Hain Rahi Pyar Ke",
          "Year": "1993",
          "imdbID": "tt0107166",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNTk5NmU0ZDgtODU5Zi00MTExLTk2MDgtYTg1MDhlMTkwN2Q1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
          "imDBLink": "https://www.imdb.com//title/tt0107166"
      },
      {
          "Title": "Kyaa Kool Hain Hum 3",
          "Year": "2016",
          "imdbID": "tt5290620",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BN2Y5YzMxYzUtMjA4YS00NWM5LTk5OWItNDZiMDVlYjYxNDBhXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
          "imDBLink": "https://www.imdb.com//title/tt5290620"
      }
      ]
  }

  search() {
    console.log(this.searchMovie);
  }

}
