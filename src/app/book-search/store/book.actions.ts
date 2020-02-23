import { Action } from '@ngrx/store';
import { Book } from '../models/books.model';

export const SET_BOOKS = '[Books] SET Books';

export class SetBooks implements Action {
  readonly type = SET_BOOKS;
  constructor(public readonly  payload: Book[]) { }
}

export type BooksActions = SetBooks;
