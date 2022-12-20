import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliarButtonComponent } from './auxiliar-button.component';

describe('AuxiliarButtonComponent', () => {
  let component: AuxiliarButtonComponent;
  let fixture: ComponentFixture<AuxiliarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuxiliarButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuxiliarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
