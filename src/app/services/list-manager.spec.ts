import { TestBed } from '@angular/core/testing';

import { ListManager } from './list-manager';

describe('ListManager', () => {
  let service: ListManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
