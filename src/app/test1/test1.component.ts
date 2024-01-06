import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `
            <h2 *ngIf="displayName; else elseblock">
              Welcome
            </h2>
            <ng-template #elseblock>
              <h2 > 
                Name is hidden
              </h2>
            </ng-template>
`,
  styles: []
})
export class Test1Component {
  public displayName = true

}

  

