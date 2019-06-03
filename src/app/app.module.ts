import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WizardModule } from './wizard/wizard.component';
import { NameAndAddressComponentComponent } from './wizard/name-and-address-component/name-and-address-component.component';
import { WeightComponentComponent } from './wizard/weight-component/weight-component.component';
import { ShippingOptionComponent } from './wizard/shipping-option/shipping-option.component';

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
