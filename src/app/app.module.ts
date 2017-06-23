import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './main/main.component';
import {ObservableNextComponent} from './observable-next/observable-next.component';

@NgModule({
  declarations: [
    MainComponent,
    ObservableNextComponent
  ],
  imports     : [
    BrowserModule
  ],
  providers   : [],
  bootstrap   : [ObservableNextComponent]
})
export class AppModule { }
