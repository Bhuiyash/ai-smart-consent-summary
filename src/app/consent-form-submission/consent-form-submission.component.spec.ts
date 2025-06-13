import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentFormSubmissionComponent } from './consent-form-submission.component';

describe('ConsentFormSubmissionComponent', () => {
  let component: ConsentFormSubmissionComponent;
  let fixture: ComponentFixture<ConsentFormSubmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsentFormSubmissionComponent]
    });
    fixture = TestBed.createComponent(ConsentFormSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
