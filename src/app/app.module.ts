import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WizardModule } from './wizard/wizard.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    WizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
