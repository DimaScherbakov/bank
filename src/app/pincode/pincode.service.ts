import { Injectable} from '@angular/core';
import * as DB from '../database';
import {InputCardService} from '../input-card/input-card.service';

@Injectable({
  providedIn: 'root'
})
export class PincodeService {
  counterMistakes = 3;
  currentCard: any;

  constructor(private inputCardService: InputCardService ) {
    // this.findCurrentCard();
  }

  findCurrentCard() {
    this.currentCard = DB.database.find(card => {
      return card.id === this.inputCardService.currentId;
    });
  }

  pinExist(pin): boolean {
    this.findCurrentCard();
    return this.currentCard.pin === pin || false;
  }
}
