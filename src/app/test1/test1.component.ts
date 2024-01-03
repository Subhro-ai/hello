import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `<input [(ngModel)]="name" type="text" placeholder="Enter your name">
  {{name}}
`,
  styles: []
})
export class Test1Component {
  public name = "";
  
}
  

