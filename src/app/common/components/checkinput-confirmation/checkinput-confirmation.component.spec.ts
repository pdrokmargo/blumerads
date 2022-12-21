import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinputConfirmationComponent } from './checkinput-confirmation.component';

describe('CheckinputConfirmationComponent', () => {
  let component: CheckinputConfirmationComponent;
  let fixture: ComponentFixture<CheckinputConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinputConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckinputConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
