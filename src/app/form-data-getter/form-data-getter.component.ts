import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-data-getter',
  templateUrl: './form-data-getter.component.html',
  styleUrls: ['./form-data-getter.component.css']
})
export class FormDataGetterComponent implements OnInit {
  @Input() service;
  @Input() control;
  constructor() { }

  ngOnInit() {
  }

}
