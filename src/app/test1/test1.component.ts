import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `
            
            <h2> {{parentData}} </h2>
            
              
`,
  styles: []
})
export class Test1Component {
  @Input() public parentData: any;
}

  

