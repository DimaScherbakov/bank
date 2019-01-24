import {Routes} from '@angular/router';
import {KeyboardComponent} from "./keyboard/keyboard.component";

export const AppRoutes: Routes = [
  {
    path: '',
    component: KeyboardComponent,
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
