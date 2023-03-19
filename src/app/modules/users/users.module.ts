import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {UserEditDialogComponent} from './components/user-edit-dialog/user-edit-dialog.component'
import {MatButtonModule} from '@angular/material/button';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostComponent } from './components/post/post.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { PostAddDialogComponent } from './components/post-add-dialog/post-add-dialog.component';

@NgModule({
  declarations: [
    UsersComponent,
    NavbarComponent,
    UserEditDialogComponent,
    PostsListComponent,
    PostComponent,
    PostAddDialogComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule
  ]
})
export class UsersModule { }
