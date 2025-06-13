// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import {environment} from '../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class AiService {
//   private apiUrl = 'https://api.openai.com/v1/chat/completions';

//   constructor(private http: HttpClient) {}

//   generateContent(procedure: string): Observable<any> {
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${environment.openAIApiKey}`
//     });

//     const requestBody = {
//       model: 'gpt-3.5-turbo',
//       messages: [
//         {
//           role: 'system',
//           content: 'You are a medical assistant helping generate easy-to-understand patient consent forms.'
//         },
//         {
//           role: 'user',
//           content: `Generate a simple and clear consent explanation for the following medical procedure: ${procedure}`
//         }
//       ],
//       temperature: 0.7
//     };

//     return this.http.post<any>(this.apiUrl, requestBody, { headers }).pipe(
//       map(res => ({ text: res.choices[0].message.content }))
//     );
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  private modelUrl = 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn';

  constructor(private http: HttpClient) {}

 summarize(text: string, simplifyForLayman: boolean = true): Observable<{ text: string }> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    ...(environment.huggingFaceKey && {
      Authorization: `Bearer ${environment.huggingFaceKey}`
    })
  });

  const prompt = simplifyForLayman
    ? `Summarize the following medical consent form so that an average person with no medical knowledge can understand it easily:\n\n${text}`
    : text;

  const body = {
    inputs: prompt
  };

  return this.http.post<any>(this.modelUrl, body, { headers }).pipe(
    map(res => {
      if (Array.isArray(res) && res[0]?.summary_text) {
        return { text: res[0].summary_text };
      } else if (res?.error) {
        throw new Error(`Hugging Face API Error: ${res.error}`);
      } else {
        return { text: 'Unable to summarize text.' };
      }
    })
  );
}
}
