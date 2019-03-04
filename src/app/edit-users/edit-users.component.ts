import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// This component handles events

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  // Value of input
  value: any = '';

  // Output for added user
  @Output() addUser = new EventEmitter<string>();
  // Output for deleted users
  @Output() removeUser = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  // Function to send added user to dashboard
  addPerson(): void {
    this.addUser.emit(this.value);
    this.value = "";

    console.log(this.value);
  }

  // Function to send delete user to dashboard
  deleteUser(): void {
    this.removeUser.emit();
    this.value = "";
  }



}
