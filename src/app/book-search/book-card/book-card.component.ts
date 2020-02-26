import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/books.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() books: Book[];
  constructor() { }

  ngOnInit() {
  }

}
