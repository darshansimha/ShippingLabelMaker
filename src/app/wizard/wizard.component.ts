import { WizardService } from './wizardComponent.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NameAndAddressComponentComponent } from './name-and-address-component/name-and-address-component.component';
@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent {
  pageCount: number = 0;
  crumbs: Array<string> = ['senderDetails', 'receiverDetails', 'weightDetails', 'shippingDetails'];
  activeCrumb = this.crumbs[this.pageCount];
  constructor(public wizService: WizardService) { }

  onSubmit($event) {

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
}

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  declarations: [WizardComponent, NameAndAddressComponentComponent],
  providers: [WizardService],
  exports: [WizardComponent, NameAndAddressComponentComponent]
})
export class WizardModule { }
