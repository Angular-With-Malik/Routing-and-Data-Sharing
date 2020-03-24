import { Component, OnInit } from '@angular/core';
import { Manager } from '../../model/manager.model';
import { ManagerService } from '../../services/manager/manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
  providers: [ManagerService]
})
export class ManagerComponent implements OnInit {
  allManager: Manager[];
  showCurrentManager = false;
  currentManager: Manager = {
    firstName: '',
    id: null,
    lastName: '',
    address: '',
    role: '',
    gender: ''
  };

  constructor(
    private managerService: ManagerService
  ) { }

  ngOnInit() {
    this.getAllManager();
  }

  getAllManager() {
    this.managerService.getAllManager().subscribe(
      (allMan) => {
        this.allManager = allMan;
      });
  }

  getCurrentManager(manager: Manager) {
    this.currentManager = manager;
    this.showCurrentManager = true;
  }
}
