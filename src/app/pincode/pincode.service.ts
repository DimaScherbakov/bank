import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PincodeService {
  counterMistakes = 3;
private pinCodes: Array<string> = ['1111'];

  constructor() { }

  pinExist(pin): boolean {
    return this.pinCodes.some((item) => {
      return item === pin;
    });
  }
}
