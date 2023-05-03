import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarNavComponent } from './avatar-nav.component';

describe('AvatarNavComponent', () => {
  let component: AvatarNavComponent;
  let fixture: ComponentFixture<AvatarNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
