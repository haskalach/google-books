import { Book } from '../models/books.model';

export interface State {
  books: Book[];
}
const initialState: State = {
  books: []
};

export function bookReducer(state, action) {
  return state;
}
