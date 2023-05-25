import { TestBed } from '@angular/core/testing';

import { SyncsService } from './syncs.service';

describe('SyncsService', () => {
  let service: SyncsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyncsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
