import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtondinamicComponent } from './Genericbotton';

describe('ButtondinamicComponent', () => {
  let component: ButtondinamicComponent;
  let fixture: ComponentFixture<ButtondinamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtondinamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtondinamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
