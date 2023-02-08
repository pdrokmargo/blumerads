import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderRadiosComponent } from './gender-radios.component';

describe('GenderRadiosComponent', () => {
  let component: GenderRadiosComponent;
  let fixture: ComponentFixture<GenderRadiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderRadiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenderRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
