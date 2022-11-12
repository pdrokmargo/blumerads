import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsDetailComponent } from './ads-detail.component';

describe('AdsDetailComponent', () => {
  let component: AdsDetailComponent;
  let fixture: ComponentFixture<AdsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
