import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PincodeService} from './pincode.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.component.html',
  styleUrls: ['./pincode.component.css']
})
export class PincodeComponent implements OnInit {

  options: FormGroup;

  constructor(fb: FormBuilder, private pincodeService: PincodeService,
              private router: Router) {
    this.options = fb.group({
      color: 'primary',
      pin: ['', Validators.pattern('^[0-9]*$')]
    });
  }
  ngOnInit() {
  }
  wrongPin() {
    this.pincodeService.counterMistakes = this.pincodeService.counterMistakes - 1;

    if (this.pincodeService.counterMistakes <= 0) {
    this.options.disable();
    return;
    }

    this.options.setErrors({'wrongPinError': true });
  }
  submit() {
    const pinValue = this.options.controls['pin'].value;
    if ( !this.pincodeService.pinExist(pinValue)) {
      this.wrongPin();
      return;
    }
this.router.navigateByUrl('operations');
  }
 showNumber(event) {
    const oldValue = this.options.controls['cardId'].value;
    if ( event === 'Cancel') {
      this.options.controls['cardId'].setValue(oldValue.substring(0, oldValue.length - 1 ) );
    } else {
      this.options.controls['cardId'].setValue(oldValue + event);
    }

  }



}
