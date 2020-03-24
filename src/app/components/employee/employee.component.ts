import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from '../../services/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
  allEmployee: Employee[];
  currentEmployee: Employee = {
    firstName: '',
    id: null,
    lastName: '',
    address: '',
    role: '',
    gender: ''
  };
  showCurrentEmployee = false;

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.employeeService.getAllEmployee().subscribe(
      (allEmp) => {
        this.allEmployee = allEmp;
      });
  }

  getCurrentEmployee(employee: Employee) {
    this.currentEmployee = employee;
    this.showCurrentEmployee = true;
  }
}







