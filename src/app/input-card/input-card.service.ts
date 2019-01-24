import { Injectable } from '@angular/core';
import * as DB from '../database';

@Injectable({
  providedIn: 'root',

})
export class InputCardService {

  currentId: string;

isIdInDB(id: string): boolean {
  let idExists = false;
  DB.database.forEach((item) => {
    if (item.id === id) {
      this.currentId = id;
      idExists = true;
    }
  });
  return idExists;
  }

  constructor() {}
}
