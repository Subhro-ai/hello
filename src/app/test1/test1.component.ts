import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `<input #myName type="text" placeholder="Enter your name">
              <button (click)="logMessage(myName.value)">Log</button>
`,
  styles: []
})
export class Test1Component {
  public name = "";
  logMessage (value: any) {
    console.log(value);
  }
}
  

