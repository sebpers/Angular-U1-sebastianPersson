import { Component, OnInit, Input } from '@angular/core';

// This component handles true / false from
// all new names

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  // Import user from user list in dashboard
  @Input() user: string;
  // True or false for color swap
  @Input() textColor1: boolean;
  constructor() { }

  ngOnInit() {
  }




}
