import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weight-component',
  templateUrl: './weight-component.component.html',
  styleUrls: ['./weight-component.component.css']
})
export class WeightComponentComponent implements OnInit {
  @Input() control: FormGroup;
  @Input() service: any;
  listOfTags;
  constructor() { }

  ngOnInit() {
    this.listOfTags = Object.keys(this.control.controls);
  }

  getClass(input: string) {
    if (this.control.controls[input].touched && this.control.controls[input].errors)
      return 'invalid-field';
  }
  showInvalid(input: string): boolean {
    if (this.control.controls[input].touched && this.control.controls[input].errors) {
      return true;
    } else {
      return false;
    }
  }
}
