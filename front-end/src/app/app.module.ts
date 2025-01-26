import { NgModule } from '@angular/core';

import { AppComponent } from './presentation/component/app/app.component';
import {AppPresentationModule} from "./presentation/app-presentation.module";

@NgModule({
  declarations: [],
  imports: [
    AppPresentationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
