import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material';
import {RouterModule} from '@angular/router';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { InputCardComponent } from './input-card.component';
import {KeyboardComponent} from '../keyboard/keyboard.component';
import {AppRoutes} from '../app.routing';
import {PincodeComponent} from '../pincode/pincode.component';
import {OperationsComponent} from '../operations/operations.component';

describe('InputCardComponent', () => {
  let component: InputCardComponent;
  let fixture: ComponentFixture<InputCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [FormsModule, ReactiveFormsModule,
        MatFormFieldModule,
        MatCardModule,
        RouterModule, RouterModule.forRoot(AppRoutes, {useHash: true}),
        MatInputModule,
        BrowserAnimationsModule],
      declarations: [ InputCardComponent,
        KeyboardComponent,
        PincodeComponent,
        OperationsComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(InputCardComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
