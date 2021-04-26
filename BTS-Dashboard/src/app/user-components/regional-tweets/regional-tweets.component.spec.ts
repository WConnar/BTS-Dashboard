import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalTweetsComponent } from './regional-tweets.component';

describe('RegionalTweetsComponent', () => {
  let component: RegionalTweetsComponent;
  let fixture: ComponentFixture<RegionalTweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionalTweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionalTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
