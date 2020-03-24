import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  allMenu = [
    { label: 'Employee', key: 'employee' },
    { label: 'Manager', key: 'manager' },
    { label: 'User', key: 'user' },
    { label: 'Customer', key: 'customer' }
  ];
  
  constructor() { }

  ngOnInit() {

  }
}
