import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post-add-dialog',
  templateUrl: './post-add-dialog.component.html',
  styleUrls: ['./post-add-dialog.component.scss']
})
export class PostAddDialogComponent {

  Form!: FormGroup;
  title!: FormControl<string | null>;
  body!: FormControl<string | null>;

  constructor(public dialogRef: MatDialogRef<PostAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public userId: number,
    private fb: FormBuilder,
    private postService: PostService,
    public SnackBar:MatSnackBar){
      this.build_form();

  }

  build_form(){
    this.Form = this.fb.group(
      {
        'title': this.title = new FormControl<string | null>(null, [Validators.required]),
        'body': this.body = new FormControl<string | null>(null, [Validators.required]),
      }
    )
  }

  add(){
    this.postService.addPost({title: this.title.value!, body: this.body.value!, user_id: this.userId}).subscribe((res: any) =>{
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
