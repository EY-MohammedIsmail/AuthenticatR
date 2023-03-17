import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl(''),
  });

  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.loginForm.value);
  }

}
