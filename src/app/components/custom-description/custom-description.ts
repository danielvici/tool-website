import { Component, input } from '@angular/core';

@Component({
  selector: 'app-custom-description',
  imports: [],
  templateUrl: './custom-description.html',
  styleUrl: './custom-description.css',
})
export class CustomDescription {
  descriptionText = input.required<string>();
  additionalListEnabled = input<boolean>(false);
  additionalListText = input<string[]>();
}
