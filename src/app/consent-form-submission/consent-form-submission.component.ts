import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AiService } from '../ai.service';

@Component({
  selector: 'app-consent-form-submission',
  templateUrl: './consent-form-submission.component.html',
  styleUrls: ['./consent-form-submission.component.css'],
  standalone: false,
})
export class ConsentFormSubmissionComponent implements AfterViewInit, OnInit {
  consentForm: FormGroup;
  signatureError = false;
  @ViewChild('signaturePad') signaturePad!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private drawing = false;

  constructor(private fb: FormBuilder, private aiService: AiService) {
    this.aiService.apiCalled$.subscribe(() => {
      alert('Consent form has been now opened');
      this.consentForm.enable();
    });
    this.consentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      // procedure: ['', Validators.required],
      consent: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (!this.isSignaturePresent()) {
      this.signatureError = true;
      return;
    }
    if (this.consentForm.valid) {
      const formValue = this.consentForm.value;
      const signatureDataUrl = this.signaturePad.nativeElement.toDataURL();
      const saveData = { ...formValue, signature: signatureDataUrl };
      localStorage.setItem('consentFormSubmission', JSON.stringify(saveData));
      alert('Consent form submitted and saved locally!');
      this.consentForm.reset();
      this.clearSignature();
      this.signatureError = false;
    }
  }

  ngAfterViewInit() {
    this.ctx = this.signaturePad.nativeElement.getContext('2d')!;
    this.signaturePad.nativeElement.addEventListener(
      'mousedown',
      this.startDraw
    );
    this.signaturePad.nativeElement.addEventListener('mousemove', this.draw);
    this.signaturePad.nativeElement.addEventListener('mouseup', this.endDraw);
    this.signaturePad.nativeElement.addEventListener(
      'mouseleave',
      this.endDraw
    );
    // For touch devices
    this.signaturePad.nativeElement.addEventListener(
      'touchstart',
      this.startDraw
    );
    this.signaturePad.nativeElement.addEventListener('touchmove', this.draw);
    this.signaturePad.nativeElement.addEventListener('touchend', this.endDraw);
  }

  startDraw = (event: MouseEvent | TouchEvent) => {
    this.drawing = true;
    const pos = this.getPosition(event);
    this.ctx.beginPath();
    this.ctx.moveTo(pos.x, pos.y);
    event.preventDefault();
  };

  draw = (event: MouseEvent | TouchEvent) => {
    if (!this.drawing) return;
    const pos = this.getPosition(event);
    this.ctx.lineTo(pos.x, pos.y);
    this.ctx.strokeStyle = '#1976d2';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    event.preventDefault();
  };

  endDraw = (event: MouseEvent | TouchEvent) => {
    if (!this.drawing) return;
    this.drawing = false;
    event.preventDefault();
  };

  getPosition(event: MouseEvent | TouchEvent) {
    const rect = this.signaturePad.nativeElement.getBoundingClientRect();
    let x = 0,
      y = 0;
    if (event instanceof MouseEvent) {
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
    } else if (event.touches.length > 0) {
      x = event.touches[0].clientX - rect.left;
      y = event.touches[0].clientY - rect.top;
    }
    return { x, y };
  }

  clearSignature() {
    this.ctx.clearRect(
      0,
      0,
      this.signaturePad.nativeElement.width,
      this.signaturePad.nativeElement.height
    );
    this.signatureError = false;
  }

  isSignaturePresent(): boolean {
    const canvas = this.signaturePad.nativeElement;
    const blank = document.createElement('canvas');
    blank.width = canvas.width;
    blank.height = canvas.height;
    return canvas.toDataURL() !== blank.toDataURL();
  }
  ngOnInit(): void {
    this.consentForm.disable(); // Disable the form initially
  }
}
