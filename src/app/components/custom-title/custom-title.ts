import { Component, input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-custom-title',
  imports: [NgStyle, NgClass],
  templateUrl: './custom-title.html',
  styleUrl: './custom-title.css',
})
export class CustomTitle {
  text = input.required<string>();
  textSizeInPx = input<number>(16);
  textColor = input<string>();
  fontWeight = input<string>('normal');
}
