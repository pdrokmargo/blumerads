import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureSelectorComponent } from './picture-selector.component';

describe('PictureSelectorComponent', () => {
  let component: PictureSelectorComponent;
  let fixture: ComponentFixture<PictureSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictureSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
