import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalTabsWizardComponent } from './horizontal-tabs-wizard.component';

describe('HorizontalTabsWizardComponent', () => {
  let component: HorizontalTabsWizardComponent;
  let fixture: ComponentFixture<HorizontalTabsWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalTabsWizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalTabsWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
