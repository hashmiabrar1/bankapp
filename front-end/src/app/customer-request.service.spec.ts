import { TestBed } from '@angular/core/testing';

import { CustomerRequestService } from './services/customer-request.service';

describe('CustomerRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerRequestService = TestBed.get(CustomerRequestService);
    expect(service).toBeTruthy();
  });
});
