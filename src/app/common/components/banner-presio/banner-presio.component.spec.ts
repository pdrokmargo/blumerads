import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPresioComponent } from './banner-presio.component';

describe('BannerPresioComponent', () => {
  let component: BannerPresioComponent;
  let fixture: ComponentFixture<BannerPresioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerPresioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPresioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
