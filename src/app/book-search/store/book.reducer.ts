import { Book, SearchParams } from '../models/books.model';
import * as BooksActions from './book.actions';

export interface State {
  books: Book[];
  params: SearchParams[];
}
const initialState: State = {
  books: [],
  params: [
    { param: 'intitle', paramLabel: 'Title' },
    { param: 'inauthor', paramLabel: 'Author' },
    { param: 'inpublisher', paramLabel: 'Publisher' },
    { param: 'subject', paramLabel: 'Subject' },
    { param: 'isbn', paramLabel: 'Isbn' },
    { param: 'lccn', paramLabel: 'Lccn' },
    { param: 'oclc', paramLabel: 'Oclc' },
  ]
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
