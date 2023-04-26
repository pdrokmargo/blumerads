import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCampaignDataAnuncioComponent } from './form-campaign-data-anuncio.component';

describe('FormCampaignDataAnuncioComponent', () => {
  let component: FormCampaignDataAnuncioComponent;
  let fixture: ComponentFixture<FormCampaignDataAnuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCampaignDataAnuncioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCampaignDataAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
