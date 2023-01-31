import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPublicComponent } from './info-public.component';

describe('InfoPublicComponent', () => {
  let component: InfoPublicComponent;
  let fixture: ComponentFixture<InfoPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
