import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  selectedUserId!: number;

  constructor(){

  }

  onUserSelect(id: number){
    this.selectedUserId= id;
  }
}
