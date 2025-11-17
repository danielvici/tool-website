import { Component, input } from '@angular/core';
import { CustomTitle } from '../custom-title/custom-title';
import {RouterLink} from '@angular/router';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-custom-card',
  imports: [CustomTitle, RouterLink, NgStyle],
  templateUrl: './custom-card.html',
  styleUrl: './custom-card.css',
})
export class CustomCard {

  title = input.required<string>();
  titleSizeInPx = input<number>(20);
  titleColor = input<string>();

  description = input.required<string>();
  descriptionColor = input<string>();

  destination = input.required<string>();
  enabled = input.required<boolean>();
}
