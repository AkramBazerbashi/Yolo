import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Post } from 'src/app/shared/models/post';
import { PostService } from 'src/app/shared/services/post.service';
import {Comment} from '../../../../shared/models/comment'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnChanges{

  @Input() post!: Post;
  @Output() onPostDelete= new EventEmitter<number>();

  comments: Comment[]= [];
  constructor(private postService: PostService,){

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.postService.getCommentsByPost(this.post.id!).subscribe(res =>{
      this.comments= res;
    });
  }

  deletePost(){
    this.onPostDelete.emit(this.post.id);
  }
}
