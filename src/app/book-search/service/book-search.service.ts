import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BookSearchService {
  bookApi = environment.baseApi + 'books/v1/volumes';
  constructor(private http: HttpClient) { }

  getBookSearch(q) {
    return this.http.get(this.bookApi + '?q=' + q);
  }

}
