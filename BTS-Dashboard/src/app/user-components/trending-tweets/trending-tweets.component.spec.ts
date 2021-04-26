import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingTweetsComponent } from './trending-tweets.component';

describe('TrendingTweetsComponent', () => {
  let component: TrendingTweetsComponent;
  let fixture: ComponentFixture<TrendingTweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingTweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
