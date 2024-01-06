import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `<h2 *ngIf="displayName">Welcome</h2>
`,
  styles: []
})
export class Test1Component {
  public displayName = false
}

  

