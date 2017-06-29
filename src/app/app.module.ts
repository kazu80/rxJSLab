import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './main/main.component';
import {ObservableNextComponent} from './observable-next/observable-next.component';
import {EndpointService} from "./service/endpoint.service";
import {FooService} from "./service/foo.service";
import {EventClickService} from "./service/event-click.service";

@NgModule({
  declarations: [
    MainComponent,
    ObservableNextComponent
  ],
  imports     : [
    BrowserModule
  ],
  providers   : [
    EndpointService,
    FooService,
    EventClickService
  ],
    bootstrap : [MainComponent]
})
export class AppModule { }
