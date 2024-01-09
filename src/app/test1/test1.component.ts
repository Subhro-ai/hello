import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `
            
            <h2> {{name}} </h2>
            
              
`,
  styles: []
})
export class Test1Component {
  @Input('parentData') public name: any;
}

  

