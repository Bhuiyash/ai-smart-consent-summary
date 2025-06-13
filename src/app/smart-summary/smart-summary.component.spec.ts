import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartSummaryComponent } from './smart-summary.component';

describe('SmartSummaryComponent', () => {
  let component: SmartSummaryComponent;
  let fixture: ComponentFixture<SmartSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartSummaryComponent]
    });
    fixture = TestBed.createComponent(SmartSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
