import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import QRCode from 'qrcode';
import { CustomTitle } from "../../../components/custom-title/custom-title";
import { CustomDescription } from "../../../components/custom-description/custom-description";
import { NgClass } from "../../../../../node_modules/@angular/common";

@Component({
  selector: 'app-generator-qrcode',
  templateUrl: './generator-qrcode.html',
  styleUrls: ['./generator-qrcode.css'],
  imports: [ReactiveFormsModule, CustomTitle, CustomDescription, NgClass],
})
export class GeneratorQrcode {
  qrDataUrl: string | null = null;
  qrCodeDetailsForm: any;

  @ViewChild('canvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;

  @ViewChild('ziel') zielRef!: ElementRef;

  constructor(private fb: FormBuilder) {
    this.qrCodeDetailsForm = this.fb.group({
      text: ['', Validators.required],
      size: [300, Validators.required],
      darkColor: ['#000000', Validators.required],
      lightColor: ['#FFFFFF', Validators.required],
    });
  }

  async generateQR(): Promise<void> {
    if (!this.qrCodeDetailsForm.valid) return;
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;

    try {
      await QRCode.toCanvas(canvas, this.qrCodeDetailsForm.value.text, {
        width: this.qrCodeDetailsForm.value.size,
        margin: 2,
        color: {
          dark: this.qrCodeDetailsForm.value.darkColor,
          light: this.qrCodeDetailsForm.value.lightColor,
        },
      });
      this.qrDataUrl = canvas.toDataURL('image/png');
      this.zielRef.nativeElement.scrollIntoView({ behavior: 'smooth' });

    } catch (err) {
      console.error('Error generating QR code:', err);
    }
  }

  downloadQR(): void {
    if (!this.qrDataUrl) return;
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = this.qrDataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  async ngOnInit() {
    this.qrCodeDetailsForm.get('size')?.valueChanges.subscribe(() => {
    this.generateQR();
  });
}
}
