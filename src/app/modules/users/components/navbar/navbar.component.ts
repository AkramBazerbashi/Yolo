import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteConfirmationComponent } from 'src/app/shared/components/delete-confirmation/delete-confirmation.component';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { UserEditDialogComponent } from '../user-edit-dialog/user-edit-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() selectedUser= new EventEmitter<number>();

  users: User[]= [];

  dataSource = new MatTableDataSource<User>();
  displayedColumns: string[] = ['user'];

  constructor(private userService: UserService,
    public dialog: MatDialog){

  }

  ngOnInit(){
    this.userService.users$.subscribe(res=>{
      this.users= res;
      this.dataSource.data= this.users;
      console.log('this.users', this.users);
    })

    this.userService.getAllUsers();

    this.dataSource.filterPredicate = (data: User, filter: string)=>{
      return (
        data.id! == +filter ||
        data.name!.includes(filter) ||
        data.email!.includes(filter) ||
        data.gender! == filter ||
        data.status! == filter
        );
      };
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter= filterValue;

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }

  addUser(){
    const dialogRef = this.dialog.open(UserEditDialogComponent, {
      width: '550px',
      data: {id: -1}
    });

    dialogRef.afterClosed().subscribe(res =>{
      this.userService.getAllUsers();
    });
  }

  editUser(user: User){
    const dialogRef = this.dialog.open(UserEditDialogComponent, {
      width: '550px',
      data: user
    });

    dialogRef.afterClosed().subscribe(res =>{
      this.userService.getAllUsers();
    });
  }

  deleteUser(user: User){
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: '550px',
      data: {}
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result = true)
        this.userService.deleteUser(user.id!).subscribe(res=>{
          console.log('res1', res);
            this.userService.getAllUsers();
        });
    });
  }

  onUserSelect(user: User){
    this.selectedUser.emit(user.id)
  }
}
