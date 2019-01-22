import {Routes} from '@angular/router';
import {InputCardComponent} from "./input-card/input-card.component";

export const AppRoutes: Routes = [
  {
    path: '',
    component: InputCardComponent,
  }
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: '**',
  //   component: ErrorComponent
  // }
];
