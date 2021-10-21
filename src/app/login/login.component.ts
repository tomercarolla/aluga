import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  submit() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value);
  }

}
