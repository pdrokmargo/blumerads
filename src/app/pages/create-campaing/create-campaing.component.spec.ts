import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCampaingComponent } from './create-campaing.component';

describe('CreateCampaingComponent', () => {
  let component: CreateCampaingComponent;
  let fixture: ComponentFixture<CreateCampaingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCampaingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCampaingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
