import { NgModule } from '@angular/core';

import { AppComponent } from './presentation/component/app/app.component';
import {AppPresentationModule} from "./presentation/app-presentation.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    AppPresentationModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
