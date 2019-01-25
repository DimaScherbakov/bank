import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  @Input() keyboardAvaliableLength: number;
  @Output() number = new EventEmitter<string>();
    constructor() { }

  ngOnInit() {
    }
  controlClick($event): void {
    const target = $event.target;
    if (target.getAttribute('value')) {
      this.number.emit(target.getAttribute('value')); }
  }
}
