import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicTransit } from './public-transit';

describe('PublicTransit', () => {
  let component: PublicTransit;
  let fixture: ComponentFixture<PublicTransit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicTransit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicTransit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
