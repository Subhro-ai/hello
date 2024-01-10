import { Component } from '@angular/core';

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

}
