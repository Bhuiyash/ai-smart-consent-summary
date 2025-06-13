import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslateService {
  constructor(private http: HttpClient) {}

  translate(text: string, targetLang: string) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    return this.http.get<any>(url).pipe(
      map((res: any) => res[0].map((t: any) => t[0]).join(''))
    );
  }
}
