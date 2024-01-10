import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `
              <h2>Employee List</h2>
              <ul *ngFor="let employee of employees">
                  <li> {{employee.name}} </li>
            </ul>
            
              
`,
  styles: []
})
export class Test1Component {
  public employees = [
    {"id": 1, "name": "Bruce", "age" : 19},
    {"id": 2, "name": "Andrew", "age" : 29},
    {"id": 3, "name": "Kylie", "age" : 39},
    {"id": 4, "name": "Selina", "age" : 49}
  ]
}

  

