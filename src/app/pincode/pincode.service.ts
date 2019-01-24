import { Injectable } from '@angular/core';
import * as DB from '../database';
import {InputCardService} from '../input-card/input-card.service';

@Injectable({
  providedIn: 'root'
})
export class PincodeService {
  counterMistakes = 3;
// private pinCodes: Array<string> = ['1111'];

  constructor(private inputCardService: InputCardService) { }

  pinExist(pin): boolean {
    const currentCard = DB.database.find(card => {
      return card.id === this.inputCardService.currentId;
    });
    return currentCard.pin === pin;
  }
}
