import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationComponent } from 'src/app/shared/components/delete-confirmation/delete-confirmation.component';
import { Post } from 'src/app/shared/models/post';
import { PostService } from 'src/app/shared/services/post.service';
import { UserService } from 'src/app/shared/services/user.service';
import { PostAddDialogComponent } from '../post-add-dialog/post-add-dialog.component';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnChanges {

  @Input() selectedUserId!: number;

  userPosts!: Post[];
  constructor(private userService: UserService,
    private postService: PostService,
    public dialog: MatDialog){

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.userService.getPostsByUser(this.selectedUserId).subscribe(res =>{
      this.userPosts= res;
    });
  }

  onPostDelete(postId: number){
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: '550px',
      data: {}
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result = true)
        this.postService.deletePost(postId!).subscribe(res =>{
          this.userService.getPostsByUser(this.selectedUserId).subscribe(res =>{
            this.userPosts= res;
          });
        });
    });

    
  }

  addPost(){
    const dialogRef = this.dialog.open(PostAddDialogComponent, {
      width: '550px',
      data: this.selectedUserId
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result = true)
        this.userService.getPostsByUser(this.selectedUserId).subscribe(res =>{
          this.userPosts= res;
        });
    });
  }
}
