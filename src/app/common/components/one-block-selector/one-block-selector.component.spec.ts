import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneBlockSelectorComponent } from './one-block-selector.component';

describe('OneBlockSelectorComponent', () => {
  let component: OneBlockSelectorComponent;
  let fixture: ComponentFixture<OneBlockSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneBlockSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneBlockSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
