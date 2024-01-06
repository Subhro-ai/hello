import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `<h2 *ngIf="displayName">Welcome</h2>
              <button (click)="change()">Change</button>
`,
  styles: []
})
export class Test1Component {
  public displayName = false
  change() {
    this.displayName = !this.displayName;
  }
}

  

