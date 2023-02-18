import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioImgComponent } from './radio-img.component';

describe('RadioImgComponent', () => {
  let component: RadioImgComponent;
  let fixture: ComponentFixture<RadioImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
