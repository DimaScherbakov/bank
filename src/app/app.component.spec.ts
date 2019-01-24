import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material';

import { InputCardComponent } from './input-card/input-card.component';
import { PincodeComponent } from './pincode/pincode.component';
import { OperationsComponent } from './operations/operations.component';
import { KeyboardComponent } from './keyboard/keyboard.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [RouterModule, RouterModule.forRoot(AppRoutes, {useHash: true}),
        FormsModule, ReactiveFormsModule,
        MatFormFieldModule,
        MatCardModule],
      declarations: [
        AppComponent,
        InputCardComponent,
        PincodeComponent,
        OperationsComponent,
        KeyboardComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bank-terminal'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('bank-terminal');
  });
});
