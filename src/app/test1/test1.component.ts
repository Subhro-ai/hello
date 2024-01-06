import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `
            <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
            <ng-template #thenBlock>
              <h2>Welcome</h2>
            </ng-template>
            <ng-template #elseBlock>
              <h2>Not Welcome</h2>
            </ng-template>
`,
  styles: []
})
export class Test1Component {
  public displayName = false

}

  

