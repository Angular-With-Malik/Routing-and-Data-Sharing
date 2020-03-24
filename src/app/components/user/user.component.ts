import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  allUser: User[];
  showCurrentUser = false;
  currentUser: User = {
    firstName: '',
    id: null,
    lastName: '',
    address: '',
    role: '',
    gender: ''
  };

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getAllUser().subscribe(
      (allUsr) => {
        this.allUser = allUsr;
      });
  }

  getCurrentUser(user: User) {
    this.currentUser = user;
    this.showCurrentUser = true;
  }
}
