import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalTransit } from './arrival-transit';

describe('ArrivalTransit', () => {
  let component: ArrivalTransit;
  let fixture: ComponentFixture<ArrivalTransit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrivalTransit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrivalTransit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
