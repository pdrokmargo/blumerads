import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfilterButtonComponent } from './searchfilter-button.component';

describe('SearchfilterButtonComponent', () => {
  let component: SearchfilterButtonComponent;
  let fixture: ComponentFixture<SearchfilterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchfilterButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchfilterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
