import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Transportation } from './transportation';

describe('Transportation', () => {
  let component: Transportation;
  let fixture: ComponentFixture<Transportation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Transportation]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Transportation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
