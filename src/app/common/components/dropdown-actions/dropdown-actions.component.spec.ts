import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownActionsComponent } from './dropdown-actions.component';

describe('DropdownActionsComponent', () => {
  let component: DropdownActionsComponent;
  let fixture: ComponentFixture<DropdownActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
