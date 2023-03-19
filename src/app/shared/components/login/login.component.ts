import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  Form!: FormGroup;
  username!: FormControl<string | null>;
  password!: FormControl<string | null>;

  constructor() { 
    this.build_form();
  }

  ngOnInit(): void {
  }

  build_form(){
    this.Form = new FormGroup({
      'username': this.username = new FormControl<string | null>(null, [Validators.required],),
      'password': this.password = new FormControl<string | null>(null, [Validators.required],),
    });
  }

  login(){
    
  }

  sign_up(){

  }
}
