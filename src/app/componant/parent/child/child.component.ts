import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() data: any;
  @Output() dataEvent: EventEmitter<any> = new EventEmitter<any>();

  sendDataToParent(){
    const data = 'Hello from child';
    this.dataEvent.emit(data);
  }

}
