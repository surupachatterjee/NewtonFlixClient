import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Movie} from '../models/Movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseURL = environment.baseURL;
  constructor(private httpClient: HttpClient) { }

  getMovies(query): Observable<Movie[]> {
    let url = `${this.baseURL}/movie/${query}`;
    return this.httpClient.get<Movie[]>(url);
  }
}
