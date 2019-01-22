import { Component, OnInit } from '@angular/core';
import {KeyboardService} from './keyboard.service'
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
board = document.getElementById('board');
  constructor(private keyboardService:KeyboardService) { }

  ngOnInit() {
  }
  controlClick($event):void{
    let target = $event.target;

    while (target != this.board) {
      if (target.className == 'control') {
        console.log(target.getAttribute('value'));
        this.keyboardService.getNumber(target.getAttribute('value'));
        return ;
      }
      target = target.parentNode;
    }

  }

}
