import { Routes } from '@angular/router';
import { Startpage } from './sites/startpage/startpage';
import {TestIt} from './sites/test-it/test-it';
import {GeneratorPassword} from './sites/generator/password/generator-password.component';

export const routes: Routes = [
  {
    path:'test',
    component: TestIt,
  },
  {
    path: '',
    component: Startpage,
  },
  {
    path: 'generator/password',
    component: GeneratorPassword,
  },
  {
    path: '**',
    redirectTo: '',
  }
];
