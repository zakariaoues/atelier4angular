import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculServiceService {

  constructor() { }

  getNumberOf(list: any[], criteria: string, value: any): number {
    let count = 0;
    for (let item of list) {
      if (item[criteria] === value) {
        count++;
      }
    }
    return count;
  }
  
  
  
}
