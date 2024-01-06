import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `
              
              <div [ngSwitch]="color">
              <div *ngSwitchCase="'red'">RED</div>
              <div *ngSwitchCase="'blue'">BLUE</div>
              <div *ngSwitchCase="'green'">GREEN</div>
              </div>
`,
  styles: []
})
export class Test1Component {
  public color = "green";

}

  

