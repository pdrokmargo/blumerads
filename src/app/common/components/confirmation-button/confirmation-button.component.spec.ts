import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationButtonComponent } from './confirmation-button.component';

describe('ConfirmationButtonComponent', () => {
  let component: ConfirmationButtonComponent;
  let fixture: ComponentFixture<ConfirmationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
