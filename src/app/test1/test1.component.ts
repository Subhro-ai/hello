import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `
            <div *ngFor="let color of colors; index as i">
            <h2> {{i+1}}. {{color}}</h2>
            </div>
              
`,
  styles: []
})
export class Test1Component {
  public colors = ['red', 'green', 'blue', 'yellow'];
}

  

