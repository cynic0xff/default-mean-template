import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Name } from './model/name';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 
  }

  getNames (): Observable<Name[]> {
    return this.http.get<Name[]>(apiUrl)
      .pipe(
        tap(names => console.log('Fetch names')),
        catchError(this.handleError('getNames', []))
      );
  }

  getName(id: number): Observable<Name> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Name>(url).pipe(
      tap(_ => console.log(`fetched name id=${id}`)),
      catchError(this.handleError<Name>(`getName id=${id}`))
    );
  }

  addName(name): Observable<Name> {
    return this.http.post<Name>(apiUrl, name, httpOptions).pipe(
      tap((name: Name) => console.log(`add name with id ${name._id}`)),
      catchError(this.handleError<any>('add name'))
    )
  }

  //error handler
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
