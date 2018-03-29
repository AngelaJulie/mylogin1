import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  lForm: FormGroup;
  post: any;
  username: string = '';
  password: string = '';

  constructor (private fb: FormBuilder) {
    this.lForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.compose([
        Validators.required, 
        Validators.minLength(5)
      ])],
    });
  }


 
  logIn(post) {
    this.username = post.username;
  }



}
