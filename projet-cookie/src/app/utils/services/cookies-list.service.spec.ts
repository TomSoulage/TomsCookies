import { TestBed } from '@angular/core/testing';

import { CookiesListService } from './cookies-list.service';

describe('CookiesListService', () => {
  let service: CookiesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookiesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
