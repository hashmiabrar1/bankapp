import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCofirmationComponent } from './register-cofirmation.component';

describe('RegisterCofirmationComponent', () => {
  let component: RegisterCofirmationComponent;
  let fixture: ComponentFixture<RegisterCofirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCofirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCofirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
