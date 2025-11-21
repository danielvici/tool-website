import { Routes } from '@angular/router';
import { Startpage } from './sites/startpage/startpage';
import { TestIt } from './sites/test-it/test-it';
import { GeneratorPassword } from './sites/generator/password/generator-password.component';
import { GeneratorQrcode } from './sites/generator/qrcode/generator-qrcode';
import { Comingsoon } from './sites/navbar/comingsoon/comingsoon';

export const routes: Routes = [
  {
    path: 'test',
    component: TestIt,
  },
  {
    path: '',
    component: Startpage,
  },
  // NAVBAR SITES
  {
    path: 'coming-soon',
    component: Comingsoon,
  }, 
  // GENERATORS
  {
    path: 'generator/password',
    component: GeneratorPassword,
  },
  {
    path: 'generator/qrcode',
    component: GeneratorQrcode,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
