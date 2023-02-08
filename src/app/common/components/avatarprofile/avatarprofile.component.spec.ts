import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarprofileComponent } from './avatarprofile.component';

describe('AvatarprofileComponent', () => {
  let component: AvatarprofileComponent;
  let fixture: ComponentFixture<AvatarprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
