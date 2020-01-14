/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CodeBookService } from './CodeBook.service';

describe('Service: CodeBook', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodeBookService]
    });
  });

  it('should ...', inject([CodeBookService], (service: CodeBookService) => {
    expect(service).toBeTruthy();
  }));
});
