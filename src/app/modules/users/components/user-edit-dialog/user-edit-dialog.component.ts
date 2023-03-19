import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-edit-dialog',
  templateUrl: './user-edit-dialog.component.html',
  styleUrls: ['./user-edit-dialog.component.scss']
})
export class UserEditDialogComponent {
  Form!: FormGroup;
  id!: FormControl<number | null>;
  name!: FormControl<string | null>;
  email!: FormControl<string | null>;
  gender!: FormControl<string | null>;
  status!: FormControl<string | null>;

  constructor(public dialogRef: MatDialogRef<UserEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private fb: FormBuilder,
    public SnackBar:MatSnackBar,
    private userService: UserService,){
      this.build_form();

      if (this.data.id! >= 0){
        this.set_value();
      }
  }

  build_form(){
    this.Form = this.fb.group(
      {
        'id': this.id = new FormControl<number | null>(null, []),
        'name': this.name = new FormControl<string | null>(null, [Validators.required]),
        'email': this.email = new FormControl<string | null>(null, [Validators.required, Validators.email]),
        'gender': this.gender = new FormControl<string | null>(null, [Validators.required]),
        'status': this.status = new FormControl<string | null>(null, [Validators.required]),
      }
    )
  }

  set_value(){
    this.id.setValue(this.data.id!) ;
    this.name.setValue(this.data.name!) ;
    this.email.setValue(this.data.email!) ;
    this.gender.setValue(this.data.gender!) ;
    this.status.setValue(this.data.status!) ;
  }

  get_value(){
    this.data.id= this.id.value!;
    this.data.name= this.name.value!;
    this.data.email= this.email.value!;
    this.data.gender= (this.gender.value! == "female"? "female": "male");
    this.data.status= (this.status.value! == "active"? "active": "inactive");
  }

  do(){
    this.get_value();
    if (this.data.id! > 0){
      this.userService.editUser(this.Form.value).subscribe((res: any) =>{
        console.log('res', res);
        if (res.id > 0){
          this.SnackBar.open('Updated Successfully','',{duration: 3000, panelClass: ['green-snackbar']});
          this.dialogRef.close(true);
        }
        else{
          this.SnackBar.open('An error has occured','',{ panelClass: ['red-snackbar']});
        }
        
      });
    }

    else{
      this.userService.addUser(this.Form.value).subscribe((res: any) =>{
        console.log('res', res);
        if (res.id > 0){
          this.SnackBar.open('Added Successfully','',{duration: 3000, panelClass: ['green-snackbar']});
          this.dialogRef.close(true);
        }
        else{
          this.SnackBar.open('An error has occured','',{ panelClass: ['red-snackbar']});
        }
      });
    }
  }
}
