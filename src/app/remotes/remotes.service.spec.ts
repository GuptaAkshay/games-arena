import { TestBed, inject } from '@angular/core/testing';

import { RemotesService } from './remotes.service';

describe('RemotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemotesService]
    });
  });

  it('should be created', inject([RemotesService], (service: RemotesService) => {
    expect(service).toBeTruthy();
  }));
});
