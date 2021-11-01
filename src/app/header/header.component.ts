import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {UserInterface} from "../shared/user.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: UserInterface | null = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe((result: UserInterface | null) => this.user = result);
  }

  logout() {
    this.authService.logout();
  }
}
