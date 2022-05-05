import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreAreaComponent } from './score-area.component';

describe('ScoreAreaComponent', () => {
  let component: ScoreAreaComponent;
  let fixture: ComponentFixture<ScoreAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
