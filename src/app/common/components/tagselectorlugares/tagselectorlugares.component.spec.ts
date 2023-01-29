import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagselectorlugaresComponent } from './tagselectorlugares.component';

describe('TagselectorlugaresComponent', () => {
  let component: TagselectorlugaresComponent;
  let fixture: ComponentFixture<TagselectorlugaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagselectorlugaresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagselectorlugaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
