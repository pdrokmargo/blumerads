import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPositionComponent } from './business-position.component';

describe('BusinessPositionComponent', () => {
  let component: BusinessPositionComponent;
  let fixture: ComponentFixture<BusinessPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessPositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
