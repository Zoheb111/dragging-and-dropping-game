import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupAreaComponent } from './pickup-area.component';

describe('PickupAreaComponent', () => {
  let component: PickupAreaComponent;
  let fixture: ComponentFixture<PickupAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickupAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
