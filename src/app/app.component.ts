import { Component } from '@angular/core';
import {UserInterface} from "./shared/user.interface";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user: UserInterface | null = null;

  constructor(private authService: AuthService) {
    this.authService.getUser().subscribe((user: UserInterface | null) => this.user = user);
  }

}
