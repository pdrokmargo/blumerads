import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurpleButtonComponent } from './purple-button.component';

describe('PurpleButtonComponent', () => {
  let component: PurpleButtonComponent;
  let fixture: ComponentFixture<PurpleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurpleButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurpleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
