import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameAndAddressComponentComponent } from './name-and-address-component.component';

describe('NameAndAddressComponentComponent', () => {
  let component: NameAndAddressComponentComponent;
  let fixture: ComponentFixture<NameAndAddressComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameAndAddressComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameAndAddressComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
