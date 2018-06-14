import { TestBed, inject } from '@angular/core/testing';

import { InforService } from './infor.service';

describe('InforService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InforService]
    });
  });

  it('should be created', inject([InforService], (service: InforService) => {
    expect(service).toBeTruthy();
  }));
});
