import { Component } from '@angular/core';
import { CustomTitle } from '../../components/custom-title/custom-title';
import { CustomCard } from '../../components/custom-card/custom-card';
import { ReactiveFormsModule } from '@angular/forms';
import  features from './features.json';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.html',
  styleUrl: './startpage.css',
  imports: [CustomTitle, CustomCard, ReactiveFormsModule],
})
export class Startpage {
  features: any[] = features;
}