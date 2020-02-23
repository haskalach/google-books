import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BooksResponse } from '../models/books.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {
  bookApi = environment.baseApi + 'books/v1/volumes';
  constructor(private http: HttpClient) { }

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

}
