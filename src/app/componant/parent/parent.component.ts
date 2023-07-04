import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  
  parentData: any = 'Hello from parent';
  getData:any = "";
  
  handleData(data: any) {
   this.getData = data;
  }

}
