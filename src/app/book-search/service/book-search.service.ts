import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BooksResponse } from '../models/books.model';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as BooksActions from '../store/book.actions';
import * as fromApp from '../../store/app.reducer';


@Injectable({
  providedIn: 'root'
})
export class BookSearchService {
  bookApi = environment.baseApi + 'books/v1/volumes';
  constructor(private http: HttpClient, private store: Store<fromApp.AppState>) { }

  getBookSearch(q, param?, paramValue?) {
    const params = new HttpParams()
      .set('q', param !== null ? q + '+' + param + ':' + paramValue : q);

    return this.http.get<BooksResponse>(this.bookApi, { params }).pipe(
      map(booksResponse => {
        return booksResponse.items || [];
      }));
  }

  getBooks(searchQuery, param?, paramValue?) {
    this.getBookSearch(searchQuery, param, paramValue).subscribe(next => {
      this.store.dispatch(new BooksActions.SetBooks(next));
    });
  }
}
