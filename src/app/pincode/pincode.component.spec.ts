import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material';
import {RouterModule} from '@angular/router';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { PincodeComponent } from './pincode.component';
import {KeyboardComponent} from '../keyboard/keyboard.component';
import {AppRoutes} from '../app.routing';
import {InputCardComponent} from '../input-card/input-card.component';
import {OperationsComponent} from '../operations/operations.component';

describe('PincodeComponent', () => {
  let component: PincodeComponent;
  let fixture: ComponentFixture<PincodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [FormsModule, ReactiveFormsModule,
        MatFormFieldModule,
        MatCardModule,
        RouterModule, RouterModule.forRoot(AppRoutes, {useHash: true}),
        MatInputModule,
        BrowserAnimationsModule],
      declarations: [ PincodeComponent,
        KeyboardComponent,
        InputCardComponent,
        OperationsComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PincodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
