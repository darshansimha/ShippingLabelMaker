import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataGetterComponent } from './form-data-getter.component';

describe('FormDataGetterComponent', () => {
  let component: FormDataGetterComponent;
  let fixture: ComponentFixture<FormDataGetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDataGetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDataGetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
