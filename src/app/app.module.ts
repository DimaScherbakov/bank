import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatSelectModule, MatInputModule, MatCardModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routing';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputCardComponent } from './input-card/input-card.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { PincodeComponent } from './pincode/pincode.component';
import { OperationsComponent } from './operations/operations.component';
import {PincodeGuard} from './pincode/pincode.guard';

@NgModule({
  declarations: [
    AppComponent,
    InputCardComponent,
    KeyboardComponent,
    PincodeComponent,
    OperationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot(AppRoutes, {useHash: true}),
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule, MatCardModule
  ],
  providers: [PincodeGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
