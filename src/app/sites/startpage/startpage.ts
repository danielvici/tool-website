import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { CustomTitle } from '../../components/custom-title/custom-title';
import { CustomCard } from '../../components/custom-card/custom-card';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.html',
  styleUrl: './startpage.css',
  imports: [CustomTitle, CustomCard, ReactiveFormsModule],
})
export class Startpage {

  features = [{
    name: 'Generators',
    enabled: true,
    tools: [{
      name: 'Password Generator',
      description: 'Create secure passwords with custom options',
      link: '/generator/password',
      enabled: true,
    }, {
      name: 'QR Code Generator',
      description: 'Generate and download QR codes for any text or URL',
      link: '/generator/qr',
      enabled: true,
    }]}, {
    name: 'Tests',
    enabled: true,
    tools: [{
      name: 'Test 1',
      description: 'This is a just test description.',
      link: '/test',
      enabled: true,
    },{
      name: 'Test 2',
      description: 'This is a just test description.',
      link: '/test',
      enabled: false,
    }]
  }];
}
