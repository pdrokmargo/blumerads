import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCampaignComponent } from './form-campaign.component';

describe('FormCampaignComponent', () => {
  let component: FormCampaignComponent;
  let fixture: ComponentFixture<FormCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
