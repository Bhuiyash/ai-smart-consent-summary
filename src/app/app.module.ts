import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AiConsentComponent } from './ai-consent/ai-consent.component';
import { SmartSummaryComponent } from './smart-summary/smart-summary.component';
import { ConsentFormSubmissionComponent } from './consent-form-submission/consent-form-submission.component';

@NgModule({
  declarations: [AppComponent, AiConsentComponent, SmartSummaryComponent, ConsentFormSubmissionComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule,CommonModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
