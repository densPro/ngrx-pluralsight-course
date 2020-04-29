import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxButtonComponent } from './bmx-button.component';

describe('BmxButtonComponent', () => {
  let component: BmxButtonComponent;
  let fixture: ComponentFixture<BmxButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmxButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
