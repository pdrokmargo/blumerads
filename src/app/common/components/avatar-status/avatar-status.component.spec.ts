import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarStatusComponent } from './avatar-status.component';

describe('AvatarStatusComponent', () => {
  let component: AvatarStatusComponent;
  let fixture: ComponentFixture<AvatarStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
