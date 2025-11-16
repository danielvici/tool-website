import { Routes } from '@angular/router';
import { Startpage } from './sites/startpage/startpage';
import {TestIt} from './sites/test-it/test-it';

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
    path: '**',
    redirectTo: '',
  }
];
