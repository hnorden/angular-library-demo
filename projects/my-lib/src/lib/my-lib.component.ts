import { Component, OnInit, Inject } from '@angular/core';
import { MyAbstractLibService, MY_IMPLEMENTATION } from './my-lib.service';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
      my-lib works! {{ myMessage }}
    </p>
  `,
  styles: []
})
export class MyLibComponent implements OnInit {

  myMessage: string;

  constructor(@Inject(MY_IMPLEMENTATION) private myAbstractLibService: MyAbstractLibService) { }

  ngOnInit() {
    this.myMessage = this.myAbstractLibService.getName();
  }

}
