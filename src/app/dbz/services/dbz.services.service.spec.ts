import { TestBed } from '@angular/core/testing';

import { DbzServicesService } from './dbz.services.service';

describe('DbzServicesService', () => {
  let service: DbzServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbzServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
