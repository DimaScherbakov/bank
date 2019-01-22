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
    this.number.emit(target.getAttribute('value'));
  }

}
