import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAdBoxComponent } from './preview-ad-box.component';

describe('PreviewAdBoxComponent', () => {
  let component: PreviewAdBoxComponent;
  let fixture: ComponentFixture<PreviewAdBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewAdBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewAdBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
