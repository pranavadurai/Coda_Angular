import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Response } from '../model/Response';
import { Song } from '../model/Song';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private http: HttpClient,private router: Router) { }

  private Url = 'http://localhost:3000/api/'

  getSongs(): Observable<Song> {
    return this.http.get<Song>(this.Url+"songs",httpOptions)
    .pipe(
      tap( _ =>
            console.log('Fetched Songs')
    ),
     catchError(this.handleError<Song>('getSongs()'))
    );
  }

  getSong(id:number): Observable<Song> {
    return this.http.get<Song>(this.Url+"songs/"+id,httpOptions)
    .pipe(
      tap( _ =>
            console.log('Fetched Song')
    ),
     catchError(this.handleError<Song>('getSongs()'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    console.log(operation+" failed: "+ error.message);
    return of(result as T);
  };
}

}
