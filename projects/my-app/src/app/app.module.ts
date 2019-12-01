import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyLibModule, MY_IMPLEMENTATION } from 'projects/my-lib/src/public-api';
import { MyLibService } from './my-lib.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyLibModule
  ],
  providers: [
    { provide: MY_IMPLEMENTATION, useClass: MyLibService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
