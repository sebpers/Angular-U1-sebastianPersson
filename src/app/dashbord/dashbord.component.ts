import { Component, OnInit } from '@angular/core';

// This component handles array, add and pop

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  // List of added users
  userList: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  // Function push user name to list
  addUser(event: string) {
    if (event !== "") {
      this.userList.push(event);
    }
  }

  // Function delete last user name from list
  deleteUser(): void {
    this.userList.pop();
  }


}
