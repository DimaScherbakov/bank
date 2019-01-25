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
      cardId: ['', [Validators.minLength(16), Validators.pattern('^[0-9]*$')]]
    });
    this.countAvaliableValue();
  }
submit() {

if (this.inputCardService.isIdInDB(this.options.controls.cardId.value)) {
  this.router.navigateByUrl('pincode');
}
this.options.controls['cardId'].setValue('');
this.options.setErrors({'wrongId': true});
}

showNumber(event) {
  const oldValue = this.options.controls['cardId'].value;
  if ( event === 'Cancel') {
    this.options.controls['cardId'].setValue(oldValue.substring(0, oldValue.length - 1 ) );
  } else {
    this.options.controls['cardId'].setValue(oldValue + event);
  }
}

countAvaliableValue() {
  this.options.valueChanges.subscribe(() => {
    this.lengthData.valueLength = this.options.controls['cardId'].value.length;
    const avaliable = this.lengthData.maxlength - this.lengthData.valueLength;

    if (avaliable < 0) {
      this.lengthData['avaliable'] = 0;
      this.options.setErrors({'unavaliableLength': true});
      return;
    }
    this.lengthData['avaliable'] = avaliable;
  });
}
  ngOnInit() {
  }

}
