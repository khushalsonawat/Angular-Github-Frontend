import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoTitleComponent } from './repo-title.component';

describe('RepoTitleComponent', () => {
  let component: RepoTitleComponent;
  let fixture: ComponentFixture<RepoTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
