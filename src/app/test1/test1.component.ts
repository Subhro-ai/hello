import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';

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
  public employees: any;

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }
}

  

