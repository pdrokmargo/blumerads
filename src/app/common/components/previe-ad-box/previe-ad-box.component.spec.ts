import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevieAdBoxComponent } from './previe-ad-box.component';

describe('PrevieAdBoxComponent', () => {
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
