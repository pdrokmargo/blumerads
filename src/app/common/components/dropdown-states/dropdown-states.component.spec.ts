import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownStatesComponent } from './dropdown-states.component';

describe('DropdownStatesComponent', () => {
  let component: DropdownStatesComponent;
  let fixture: ComponentFixture<DropdownStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownStatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
