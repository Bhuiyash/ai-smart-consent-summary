import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiConsentComponent } from './ai-consent.component';

describe('AiConsentComponent', () => {
  let component: AiConsentComponent;
  let fixture: ComponentFixture<AiConsentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiConsentComponent]
    });
    fixture = TestBed.createComponent(AiConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
