import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
board = document.getElementById('board');
  @Output() number = new EventEmitter<string>();
    constructor() { }

  ngOnInit() {
  }
  controlClick($event): void {
    const target = $event.target;
    this.number.emit(target.getAttribute('value'));
  }

}
