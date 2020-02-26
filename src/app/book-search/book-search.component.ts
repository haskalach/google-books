import { Component, OnInit } from '@angular/core';
import { BookSearchService } from './service/book-search.service';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import * as fromApp from '../store/app.reducer';
import { State } from './store/book.reducer';
@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  searchQuery = '';
  filterParam = null;
  filterData = '';
  bookState: Observable<State>;
  constructor(private bookService: BookSearchService, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.bookState = this.store.select('book');
  }

  getBooks() {
    // Triger the Api Call  To apply search and Filters
    this.bookService.getBooks(this.searchQuery, this.filterParam, this.filterData);
  }
}
