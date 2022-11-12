import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetAudienceComponent } from './target-audience.component';

describe('TargetAudienceComponent', () => {
  let component: TargetAudienceComponent;
  let fixture: ComponentFixture<TargetAudienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetAudienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetAudienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
