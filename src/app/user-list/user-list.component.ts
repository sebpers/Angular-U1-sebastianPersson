import { Component, OnInit, Input } from '@angular/core';

// This component handles true or false, toggle

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  // Boolean, change color on user text
  textColor: boolean = true;

  // user list from dashboard
  @Input() users: string;
  constructor() { }

  ngOnInit() {
  }

  // Swap between true and false
  toggleTextColor(): void {
    this.textColor = !this.textColor;
    console.log(this.textColor);
  }


}
