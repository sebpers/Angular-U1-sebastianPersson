import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { EditUsersComponent } from './edit-users/edit-users.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    UserListComponent,
    UserListItemComponent,
    EditUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
