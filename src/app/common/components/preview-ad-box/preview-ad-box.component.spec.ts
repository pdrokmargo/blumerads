import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevieAdBoxComponent } from './preview-ad-box.component';

describe('PreviewAdBoxComponent', () => {
  let component: PrevieAdBoxComponent;
  let fixture: ComponentFixture<PrevieAdBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevieAdBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevieAdBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
