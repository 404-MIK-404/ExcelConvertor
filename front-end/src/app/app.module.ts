import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DxDataGridModule, DxTabPanelModule} from "devextreme-angular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxTabPanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
