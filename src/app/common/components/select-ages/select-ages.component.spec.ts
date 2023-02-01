import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAgesComponent } from './select-ages.component';

describe('SelectAgesComponent', () => {
  let component: SelectAgesComponent;
  let fixture: ComponentFixture<SelectAgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAgesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectAgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
