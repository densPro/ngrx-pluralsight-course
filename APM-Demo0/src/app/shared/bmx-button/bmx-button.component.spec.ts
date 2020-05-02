import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxButtonComponent } from './bmx-button.component';

describe('BmxButtonComponent', () => {
  let component: BmxButtonComponent;
  let fixture: ComponentFixture<BmxButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmxButtonComponent ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(BmxButtonComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on click', () => {
    // spy on event emitter
    spyOn(component.clickEventEmitter, 'emit');

    component.clickEvent(new MouseEvent(''));

    fixture.detectChanges();

    expect(component.clickEventEmitter.emit).toHaveBeenCalled();
  });
});
