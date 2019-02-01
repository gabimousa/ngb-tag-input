import { TestBed } from '@angular/core/testing';

import { NgbTagInputService } from './ngb-tag-input.service';

describe('NgbTagInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgbTagInputService = TestBed.get(NgbTagInputService);
    expect(service).toBeTruthy();
  });
});
