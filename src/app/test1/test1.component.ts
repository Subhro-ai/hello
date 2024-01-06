import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `
              <input #colorchoice type="text">
              <button (click)="changeColor(colorchoice.value)">Enter</button>
              <div [ngSwitch]="color">
              <div *ngSwitchCase="'red'">RED</div>
              <div *ngSwitchCase="'blue'">BLUE</div>
              <div *ngSwitchCase="'green'">GREEN</div>
              <div *ngSwitchDefault>Pick again!</div>
              </div>
`,
  styles: []
})
export class Test1Component {
  public color = "green";
  changeColor(colorc:any) {
    this.color = colorc;
    console.log(this.color);
  }
}

  

