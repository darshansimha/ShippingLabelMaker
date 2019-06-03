import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WizardModule } from './wizard/wizard.component';
import { FormDataGetterComponent } from './form-data-getter/form-data-getter.component';

@NgModule({
  declarations: [
    AppComponent,
    FormDataGetterComponent
  ],
  imports: [
    WizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
