import { ShippingOptionComponent } from './shipping-option/shipping-option.component';
import { WeightComponentComponent } from './weight-component/weight-component.component';
import { WizardService } from './wizardComponent.service';
import { Component, NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NameAndAddressComponentComponent } from './name-and-address-component/name-and-address-component.component';
@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent {
  pageCount: number = 0;
  crumbs: Array<string> = ['senderDetails', 'receiverDetails', 'weightDetails', 'shippingDetails', 'confirmation'];
  activeCrumb = this.crumbs[this.pageCount];
  result: any;
  readonly ShippingOption = {
    ground: 1,
    priority: 2
  }
  constructor(public wizService: WizardService) { }

  onSubmit() {
    this.activeCrumb = this.crumbs[this.crumbs.length - 1];
    const shippingRate = 0.40;
    let shippingCost = this.wizService.weightDetails.controls.weight.value * shippingRate *
      (+this.wizService.shippingDetails.controls.shippingOption.value === this.ShippingOption.ground ? 1 : 1.5);
    console.log(shippingCost);
    this.result = this.wizService.shippingLabelForm.value;
    this.result['shipping cost'] = shippingCost;
  }
  isNextDisabled(): boolean {
    if (this.validateCurrentForm(this.wizService[this.activeCrumb])) {
      return true;
    } else {
      return false;
    }
  }

  isPreviousDisabled(): boolean {
    if (this.pageCount == 0) {
      return true;
    } else {
      return false;
    }
  }

  onPreviousClick() {
    if (this.pageCount != 0) {
      this.pageCount--;
    }
    this.activeCrumb = this.crumbs[this.pageCount];
  }

  onNextClick() {
    if (this.wizService[this.activeCrumb].invalid) {
      return;
    }
    if (this.pageCount != this.crumbs.length - 1) {
      this.pageCount++;
    }
    this.activeCrumb = this.crumbs[this.pageCount]
  }

  validateCurrentForm(formData: FormGroup): boolean {
    let controlValues = Object.values(formData.controls);

    for (let i = 0; i < controlValues.length; i++) {
      if (controlValues[i].errors) {
        return true;
      }
    }

    return false;
  }

  getFromDetails() {
    if (this.result)
      return JSON.stringify(this.result.From);
  }
  getToDetails() {
    if (this.result)
      return JSON.stringify(this.result.To);
  }
  getWeight() {
    if (this.result)
      return this.result.Weight.weight;
  }
  getShippingMethod() {
    if (this.result) {
      return this.result['Shipping Option'].shippingOption;
    }
  }
  getCost() {
    if (this.result) {
      return this.result['shipping cost'];
    }
  }
}

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  declarations: [WizardComponent, NameAndAddressComponentComponent, WeightComponentComponent, ShippingOptionComponent],
  providers: [WizardService],
  exports: [WizardComponent, NameAndAddressComponentComponent, WeightComponentComponent, ShippingOptionComponent]
})
export class WizardModule { }
