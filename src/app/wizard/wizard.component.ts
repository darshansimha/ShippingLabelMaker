import { WizardService } from './wizardComponent.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
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
    if (this.pageCount == this.crumbs.length - 1) {
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
    if (this.wizService.shippingLabelForm.invalid) {
      return;
    }
    if (this.pageCount != 0) {
      this.pageCount--;
    }
    this.activeCrumb = this.crumbs[this.pageCount];
  }

  onNextClick() {
    if (this.wizService.shippingLabelForm.invalid) {
      return;
    }
    if (this.pageCount != this.crumbs.length - 1) {
      this.pageCount++;
    }
    this.activeCrumb = this.crumbs[this.pageCount]
  }

  isFormValid() {

  }
}

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  declarations: [WizardComponent],
  providers: [WizardService],
  exports: [WizardComponent]
})
export class WizardModule { }
