import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `
          <h2>Employee List</h2>
          <ul *ngFor="let employee of employees">
            <li> {{employee.id}}. {{employee.name}}-{{employee.age}} </li>
          </ul>
  `,
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  public employees:any;

  constructor (private _employeeService : EmployeeService) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }
}
