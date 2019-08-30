import { TestBed } from '@angular/core/testing';

import { CustomerServiceService } from './services/customer-service.service';

describe('CustomerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerServiceService = TestBed.get(CustomerServiceService);
    expect(service).toBeTruthy();
  });
});
