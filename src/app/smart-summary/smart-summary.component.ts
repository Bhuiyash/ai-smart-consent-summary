import { Component } from '@angular/core';
import { AiService } from '../ai.service';
import { TranslateService } from '../translate.service';
@Component({
  selector: 'app-smart-summary',
  templateUrl: './smart-summary.component.html',
  styleUrls: ['./smart-summary.component.css']
})
export class SmartSummaryComponent {
  rawText = '';
  summaryText = '';
  selectedLanguage = 'en';
  accepted = false;
  originalTranslatedContent = '';
  loading = false;
  loadingSpinnerMessage = '';

  constructor(private aiService: AiService, private translateService: TranslateService) { }
    // Add inside SmartSummaryComponent class
  languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'Hindi' },
    { code: 'ta', label: 'Tamil' },
    { code: 'mr', label: 'Marathi' },
    { code: 'te', label: 'Telugu' },
    { code: 'bn', label: 'Bengali' },
    { code: 'gu', label: 'Gujarati' },
    { code: 'kn', label: 'Kannada' },
    { code: 'ml', label: 'Malayalam' },
    { code: 'pa', label: 'Punjabi' },
    { code: 'bh', label: 'Bhojpuri' },
    { code: 'or', label: 'Odia' },
    { code: 'as', label: 'Assamese' },
    { code: 'ur', label: 'Urdu' },
    { code: 'mrj', label: 'Marwari' },
    { code: 'ks', label: 'Kashmiri' },
    { code: 'ne', label: 'Nepali' },
    { code: 'si', label: 'Sinhala' },
    { code: 'my', label: 'Burmese' },
    { code: 'th', label: 'Thai' },
    { code: 'vi', label: 'Vietnamese' },
    { code: 'zh', label: 'Chinese' },
    { code: 'ja', label: 'Japanese' },
    { code: 'ko', label: 'Korean' },
    { code: 'fr', label: 'French' }
    
  ];

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.rawText = reader.result as string;
    };
    reader.readAsText(file);
  }

  processOriginalForm() {
    this.summaryText = '';
    this.loading = true;
    this.loadingSpinnerMessage = 'Generating summary...';
    this.translateService.translate(this.rawText, this.selectedLanguage).subscribe(translation => {
      this.originalTranslatedContent = translation;
      // this.loading = false;
    }, () => {
      // this.loading = false;
    });
  }

  processForm() {
    this.loading = true;
    this.processOriginalForm();
    this.aiService.summarize(this.rawText).subscribe(aiResponse => {
      this.translateService.translate(aiResponse.text, this.selectedLanguage).subscribe(translation => {
        this.summaryText = translation;
        this.loading = false;
      }, () => {
        this.loading = false;
      });
    }, () => {
      this.loading = false;
    });
  }

  submit() {
    alert('Consent confirmed. Summary accepted.');
  }
}