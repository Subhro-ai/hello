import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `
            
            <h2> {{name}} </h2>
            <h2> {{name | lowercase}} </h2>
            <h2> {{name | uppercase}} </h2>
            <h2> {{name | titlecase}} </h2>
            <h2> {{name | slice:3:5}} </h2>
            <h2> {{5.12 | number :'1.2-3'}} </h2>
            <h2> {{5.12 | number :'2.4-5'}} </h2>
            <h2> {{5.12 | number :'3.4-6'}} </h2>
              
`,
  styles: []
})
export class Test1Component {
  public name = "Bruce wayne";
}

  

