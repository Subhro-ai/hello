import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      {"id": 1, "name": "Bruce", "age" : 19},
      {"id": 2, "name": "Andrew", "age" : 29},
      {"id": 3, "name": "Kylie", "age" : 39},
      {"id": 4, "name": "Selina", "age" : 49}
    ];
  }
}
