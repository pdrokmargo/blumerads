import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetAudienceDetailComponent } from './target-audience-detail.component';

describe('TargetAudienceDetailComponent', () => {
  let component: TargetAudienceDetailComponent;
  let fixture: ComponentFixture<TargetAudienceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetAudienceDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetAudienceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
