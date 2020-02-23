import { Component, OnInit } from '@angular/core';
import { BookSearchService } from './service/book-search.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  searchQuery = '';
  constructor(private bookService: BookSearchService) { }

  ngOnInit() {
  }

  getBooks() {
    this.bookService.getBookSearch(this.searchQuery).subscribe(next => {
      console.log({ next });
    });
  }
}
