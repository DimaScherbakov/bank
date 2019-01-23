import {Routes} from '@angular/router';
import {InputCardComponent} from './input-card/input-card.component';
import {PincodeComponent} from './pincode/pincode.component';
import {OperationsComponent} from './operations/operations.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: InputCardComponent,
  },
  {
  path: 'pincode', component: PincodeComponent
  },
  {
    path: 'operations', component: OperationsComponent
  }

];
