import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DxDataGridModule, DxTabPanelModule} from "devextreme-angular";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxTabPanelModule,
    BrowserAnimationsModule,
    ToolbarModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
