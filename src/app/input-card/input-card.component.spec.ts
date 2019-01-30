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
import {InputCardService} from './input-card.service';

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
        OperationsComponent],
      providers: [InputCardService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  it('value length info exists', () => {
    expect(component.lengthData).toBeTruthy();
  });
  it('form exists', () => {
    expect(component.options).toBeTruthy();
  });

  it('submit does pass if card is blocked', () => {
    const service = TestBed.get(InputCardService);
    const spyOnIsIdInDB = spyOn(service, 'isIdInDB').and.returnValue(true);
    const spyOnIsBlocked = spyOn(service, 'isBlocked').and.returnValue(true);
    component.submit();
    expect(service.isIdInDB).toHaveBeenCalled();
    expect(service.isBlocked).toHaveBeenCalled();
    expect(component.options.errors.isBlocked).toEqual( true);
  });
  it('submit does not pass if card id is wrong', () => {
    const service = TestBed.get(InputCardService);
    const spyOnIsIdInDB = spyOn(service, 'isIdInDB').and.returnValue(true);
    const spyOnIsBlocked = spyOn(service, 'isBlocked').and.returnValue(false);
    component.submit();
    expect(component.options.controls.cardId.value).toEqual( '');
    expect(component.options.errors['wrongId']).toEqual(true);
  });
it('showNumber method exists', () => {
  expect(component.showNumber).toBeTruthy();
});
  it('showNumber method works with cancel button', () => {
    const event = 'Cancel';
    component.showNumber(event);
    expect(component.options.controls['cardId']).toBeTruthy();
  });
  it('showNumber method works with number button', () => {
    const event = '1';
    component.showNumber(event);
    expect(component.options.controls['cardId']).toBeTruthy();
  });
});
