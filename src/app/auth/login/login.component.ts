import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
    this.authService.login(this.loginForm.value);
  }

}
