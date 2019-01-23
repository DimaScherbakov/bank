import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InputCardService} from './input-card.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.css']
})
export class InputCardComponent implements OnInit {
lengthData = {
  maxlength: 16,
  valueLength: 0
};
  options: FormGroup;

  constructor(fb: FormBuilder, private inputCardService: InputCardService,
              private router: Router) {
    this.options = fb.group({
      color: 'primary',
      cardId: ['', Validators.pattern('^[0-9]*$')]
    });
  }
submit() {

if (this.inputCardService.isIdInDB(this.options.controls.cardId.value)) {
  this.router.navigateByUrl('pincode');
}
}

showNumber(event) {
  const oldValue = this.options.controls['cardId'].value;
  if ( event === 'Cancel') {
    this.options.controls['cardId'].setValue(oldValue.substring(0, oldValue.length - 1 ) );
  } else {
    this.options.controls['cardId'].setValue(oldValue + event);
  }

  this.lengthData.valueLength = this.options.controls['cardId'].value.length;
  this.lengthData['avaliable'] = this.lengthData.maxlength - this.lengthData.valueLength;

}
  ngOnInit() {
  }

}
