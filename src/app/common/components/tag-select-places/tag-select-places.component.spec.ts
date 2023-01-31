import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSelectPlacesComponent } from './tag-select-places.component';

describe('TagselectorlugaresComponent', () => {
  let component: TagSelectPlacesComponent;
  let fixture: ComponentFixture<TagSelectPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagSelectPlacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagSelectPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
