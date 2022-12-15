import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorOptionComponent } from './selector-option.component';

describe('SelectorOptionComponent', () => {
  let component: SelectorOptionComponent;
  let fixture: ComponentFixture<SelectorOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
