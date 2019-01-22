import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputCardService {
database:Array<string> = ['0000'];

isIdInDB(id:string):boolean{
  return this.database.some((item)=>{
    return item === id;
  });
  }
  constructor() { }
}
