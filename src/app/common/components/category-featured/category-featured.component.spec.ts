import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFeaturedComponent } from './category-featured.component';

describe('CategoryFeaturedComponent', () => {
  let component: CategoryFeaturedComponent;
  let fixture: ComponentFixture<CategoryFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryFeaturedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
