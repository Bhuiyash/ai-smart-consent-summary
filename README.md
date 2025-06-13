# SmartConsentApp
🧠 Smart AI Consent Form Summary (Angular + Hugging Face)
📄 Description
This project is a smart AI-powered healthcare application built using Angular 15, designed to simplify complex medical consent forms into clear, understandable summaries for patients. The system uses NLP models (e.g., Hugging Face's BART) to automatically generate a concise, patient-friendly explanation of lengthy technical consent documents. Additionally, it supports multilingual translation using integrated services, making it accessible to patients in their native language (e.g., Hindi, Tamil).
🔧 Features
✅ Upload Consent Forms in .txt or .pdf formats
🧠 AI Summarization of technical medical content using Hugging Face API
🌐 Multilingual Translation of both full form and summary
🧍‍♂️ Layperson-friendly output to ensure patients understand procedures and risks
✍️ Digital Consent interface for entering name, procedure, and signature
💾 Local Storage Support for form submission preview or history
💡 Use Case
A hospital or clinic can upload standard consent documents, and the system will generate a simplified explanation in the patient’s language, making the consent process faster, safer, and more inclusive — especially for those with limited health literacy or language barriers.
🛠 Tech Stack
Angular 15
RxJS & HttpClient for API calls
Hugging Face Transformers (facebook/bart-large-cnn) for summarization
Google Translate API / Custom translation layer for multilingual support

 
 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

To run the project perfectly on local server,

1. add environments folder in src
2. create environment.ts file and add the below
3. export const environment = {
  production: false,
  huggingFaceKey: 'YOUR HUGGING API KEY',
};

Download the dependencies by using npm install


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
