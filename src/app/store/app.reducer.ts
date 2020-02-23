import * as fromBook from '../book-search/store/book.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  book: fromBook.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  book: fromBook.bookReducer
}
