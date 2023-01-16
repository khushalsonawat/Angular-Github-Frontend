import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSocialMediaHandlesComponent } from './user-social-media-handles.component';

describe('UserSocialMediaHandlesComponent', () => {
  let component: UserSocialMediaHandlesComponent;
  let fixture: ComponentFixture<UserSocialMediaHandlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSocialMediaHandlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSocialMediaHandlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
