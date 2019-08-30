import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRequestsListComponent } from './customer-requests-list.component';

describe('CustomerRequestsListComponent', () => {
  let component: CustomerRequestsListComponent;
  let fixture: ComponentFixture<CustomerRequestsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRequestsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
