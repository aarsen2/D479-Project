import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticTravel } from './domestic-travel';

describe('DomesticTravel', () => {
  let component: DomesticTravel;
  let fixture: ComponentFixture<DomesticTravel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomesticTravel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomesticTravel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
