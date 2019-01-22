import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class KeyboardService {

  constructor() { }

  getNumber(num): Observable<string> {
    return of(num);
  }

}
