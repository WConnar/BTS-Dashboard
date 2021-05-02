import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterLikesComponent } from './twitter-likes.component';

describe('TwitterLikesComponent', () => {
  let component: TwitterLikesComponent;
  let fixture: ComponentFixture<TwitterLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterLikesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
