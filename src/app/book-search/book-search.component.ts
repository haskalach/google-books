import { Component, OnInit } from '@angular/core';
import { BookSearchService } from './service/book-search.service';
import { Book } from './models/books.model';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import * as BooksActions from './store/book.actions';
import * as fromApp from '../store/app.reducer';
@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  searchQuery = '';
  bookState: Observable<{ books: Book[] }>;
  constructor(private bookService: BookSearchService, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.bookState = this.store.select('book');
  }

  getBooks() {
    this.bookService.getBooks(this.searchQuery);
  }
}
