import {NgModule} from "@angular/core";
import {AppDomainModule} from "../domain/app-domain.module";
import {AppDataModule} from "../data/app-data.module";
import {AppComponent} from "./component/app/app.component";
import {BrowserModule} from "@angular/platform-browser";
import {DxDataGridModule, DxTabPanelModule} from "devextreme-angular";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {SidebarModule} from "primeng/sidebar";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxTabPanelModule,
    BrowserAnimationsModule,
    ToolbarModule,
    ButtonModule,
    SidebarModule,
    HttpClientModule,

    AppDomainModule,
    AppDataModule,
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    AppComponent
  ],
  providers: [],
})
export class AppPresentationModule {

  constructor() {}

}
