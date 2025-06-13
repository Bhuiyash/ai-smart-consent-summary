import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AiService } from '../ai.service';

@Component({
  selector: 'app-ai-consent',
  templateUrl: './ai-consent.component.html',
  styleUrls: ['./ai-consent.component.css']
})
export class AiConsentComponent {
  consentForm: FormGroup;
  aiGeneratedText = '';

  constructor(private fb: FormBuilder, private aiService: AiService) {
    this.consentForm = this.fb.group({
      patientName: ['', Validators.required],
      procedure: ['', Validators.required],
      consent: [false, Validators.requiredTrue]
    });
  }

loading = false;
generateConsent() {
  const procedure = this.consentForm.get('procedure')?.value;
  this.loading = true;
  // this.aiService.generateContent(procedure).subscribe((response) => {
  //   this.aiGeneratedText = response.text;
  //   this.loading = false;
  // });
}
onSubmit() {
    if (this.consentForm.valid) {
      alert('Consent submitted: ' + JSON.stringify(this.consentForm.value));
    }
  }
}