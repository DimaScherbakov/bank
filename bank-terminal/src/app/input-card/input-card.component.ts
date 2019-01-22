import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InputCardService} from './input-card.service';
@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.css']
})
export class InputCardComponent implements OnInit {

  options: FormGroup;

  constructor(fb: FormBuilder, private inputCardService:InputCardService) {
    this.options = fb.group({
      color: 'primary',
      cardId: ['',Validators.pattern("^[0-9]*$")]
    });
  }
submit(){
console.log(this.inputCardService.isIdInDB(this.options.controls.cardId.value));
}
  ngOnInit() {
  }

}
