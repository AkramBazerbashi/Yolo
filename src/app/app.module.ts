import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog'; 
import { ReactiveFormsModule } from '@angular/forms';

import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {MatInputModule} from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox'; 

import {MatListModule} from '@angular/material/list'; 
import { MatRadioModule } from '@angular/material/radio';
import { MatTreeModule } from '@angular/material/tree';
//////////////////////////////

import {LoginComponent} from './shared/components/login/login.component';
import {DeleteConfirmationComponent} from './shared/components/delete-confirmation/delete-confirmation.component'
import { AuthInterceptorService } from './shared/services/auth-interceptor.service';

@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    DeleteConfirmationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
   AppRoutingModule,
    BrowserAnimationsModule,
  
    HttpClientModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,    
    HttpClientModule  ,
    MatGridListModule,
    ScrollingModule ,
    MatToolbarModule ,
    MatSidenavModule ,
    MatIconModule ,
    MatDividerModule,
    FormsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule ,
   
    MatListModule,

    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatRadioModule,
   MatTreeModule,
   MatCardModule,
   MatProgressSpinnerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
