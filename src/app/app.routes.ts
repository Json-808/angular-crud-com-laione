import { Routes } from '@angular/router';
import { LayoutMainComponent } from './main/layout-main/layout-main.component';

export const routes: Routes = [
  { path: '', component: LayoutMainComponent },
  {
    path: '',
    redirectTo: 'LayoutMainComponent',
    pathMatch: 'full'
  },

];
