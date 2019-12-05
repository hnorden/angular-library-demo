import { Injectable } from '@angular/core';
import { MyAbstractLibService } from 'my-lib';

@Injectable({
  providedIn: 'root'
})
export class MyLibService extends MyAbstractLibService {

  constructor() { 
    super();
  }

  public getName() {
    return "Name: my-lib implementation";
  }
}
