/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookSearchService } from './book-search.service';

describe('Service: BookSearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookSearchService]
    });
  });

  it('should ...', inject([BookSearchService], (service: BookSearchService) => {
    expect(service).toBeTruthy();
  }));
});
