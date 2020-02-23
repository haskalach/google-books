import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  constructor(private http: HttpClient,private store: Store<fromApp.AppState>) { }

  getBookSearch(q) {
    return this.http.get<BooksResponse>(this.bookApi + '?q=' + q).pipe(
      map(booksResponse => {
        return booksResponse.items.map(books => {
          return {
            ...books,
            books: books ? books : []
          };
        });
      }));
  }

  getBooks(searchQuery) {
    this.getBookSearch(searchQuery).subscribe(next => {
      this.store.dispatch(new BooksActions.SetBooks(next));
    });
  }
}
