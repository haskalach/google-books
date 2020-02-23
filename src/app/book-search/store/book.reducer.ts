import { Book } from '../models/books.model';
import * as BooksActions from './book.actions';

export interface State {
  books: Book[];
}
const initialState: State = {
  books: []
};

export function bookReducer(state = initialState, action: BooksActions.BooksActions) {
  switch (action.type) {
    case BooksActions.SET_BOOKS:
      return {
        ...state,
        books: [...action.payload]
      };
    default:
      return state;
  }
}
