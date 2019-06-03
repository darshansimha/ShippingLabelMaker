import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightComponentComponent } from './weight-component.component';

describe('WeightComponentComponent', () => {
  let component: WeightComponentComponent;
  let fixture: ComponentFixture<WeightComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
