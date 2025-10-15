import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpfulInfo } from './helpful-info';

describe('HelpfulInfo', () => {
  let component: HelpfulInfo;
  let fixture: ComponentFixture<HelpfulInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpfulInfo]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HelpfulInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
