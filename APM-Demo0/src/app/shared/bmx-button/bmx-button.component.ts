import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-bmx-button',
  templateUrl: './bmx-button.component.html',
  styleUrls: ['./bmx-button.component.css']
})
export class BmxButtonComponent implements OnInit {

  @Input() name: string;
  @Input() type = 'button';
  @Input() btnStyle = 'light';
  @Input() disable = false;

  @Output() clickEventEmitter = new EventEmitter<MouseEvent>();
  constructor() { }

  ngOnInit() {
    console.log(name);
  }

  clickEvent(event: MouseEvent) {
    this.clickEventEmitter.emit(event);
  }

}
