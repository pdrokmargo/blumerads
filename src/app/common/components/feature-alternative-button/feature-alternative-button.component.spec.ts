import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAlternativeButtonComponent } from './feature-alternative-button.component';

describe('FeatureAlternativeButtonComponent', () => {
  let component: FeatureAlternativeButtonComponent;
  let fixture: ComponentFixture<FeatureAlternativeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureAlternativeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureAlternativeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
