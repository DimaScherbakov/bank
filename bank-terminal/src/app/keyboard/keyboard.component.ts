import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {KeyboardService} from './keyboard.service'
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
board = document.getElementById('board');
  @Output() number = new EventEmitter<string>();
    constructor(private keyboardService:KeyboardService) { }

  ngOnInit() {
  }
  controlClick($event):void{
    let target = $event.target;

    while (target != this.board) {
      if (target.className == 'control') {
        // console.log(target.getAttribute('value'));
        // this.keyboardService.number = this.keyboardService.getNumber(target.getAttribute('value'));
        this.number.emit(target.getAttribute('value'));
        // console.log(this.keyboardService.number);
        return ;
      }
      target = target.parentNode;
    }

  }

}
