import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../models/post';
import {Comment} from '../../shared/models/comment'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  PostUrl: string = "https://gorest.co.in/public/v2/posts/";

  Posts: Post[]= [];
  Posts$: BehaviorSubject<Post[]>= new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) {
    
  }


  getAllPosts(){
    return this.http.get<Post[]>(this.PostUrl).subscribe(res =>{
      this.Posts= res;
      this.Posts$.next(this.Posts);
      console.log('this.Posts', this.Posts);
    });
  }

  getPostById(id: number){
    return this.http.get<Post[]>(this.PostUrl+id);
    
  }

  getCommentsByPost(postId: number){
    return this.http.get<Comment[]>(this.PostUrl+postId+'/comments');
  }

  addPost(Post: Post){
    return this.http.post<Post>(this.PostUrl, Post);
  }

  editPost(Post: Post){
    return this.http.put(this.PostUrl+Post.id, Post);
  }
  
  deletePost(id: number){
    return this.http.delete(this.PostUrl+id);
  }


}
