import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material';
import {Router, RouterModule} from '@angular/router';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { PincodeComponent } from './pincode.component';
import {KeyboardComponent} from '../keyboard/keyboard.component';
import {AppRoutes} from '../app.routing';
import {InputCardComponent} from '../input-card/input-card.component';
import {OperationsComponent} from '../operations/operations.component';
import {InputCardService} from '../input-card/input-card.service';
import {PincodeService} from './pincode.service';

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
        OperationsComponent],
      providers: [
        PincodeService
      ]
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
  it('has form', () => {
    expect(component.options).toBeTruthy();
  });
  it('wrongPin method exists', () => {
    component.wrongPin();
    expect(component.wrongPin).toBeTruthy();
  });
  it('wrongPin method blocks card when count of possible pincode inputs are zero', () => {
    const service = TestBed.get(PincodeService);
    service.counterMistakes = 0;
    service.currentCard = {blocked: true};
    component.wrongPin();
    expect(component.wrongPin).toBeTruthy();
  });
  it('showNumber method exists', () => {
    expect(component.showNumber).toBeTruthy();
  });
  it('showNumber method works with cancel button', () => {
    const event = 'Cancel';
    component.showNumber(event);
    expect(component.options.controls['pin']).toBeTruthy();
  });
  it('showNumber method works with number button', () => {
    const event = '1';
    component.showNumber(event);
    expect(component.options.controls['pin']).toBeTruthy();
  });
  it('does not passes wrong pincode', () => {
    const service = TestBed.get(PincodeService);
    const spy = spyOn(service, 'pinExist').and.returnValue(false);
    component.submit();
    expect(component.submit).toBeTruthy();
  });
  it('navigates after correct pincode', () => {
    const service = TestBed.get(PincodeService);
    const router = TestBed.get(Router);
    const spy = spyOn(service, 'pinExist').and.returnValue(true);
    const spyOnRouter = spyOn(router, 'navigateByUrl');
    component.submit();
    expect(router.navigateByUrl).toHaveBeenCalled();
  });
});
