import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {UserInterface} from "../shared/user.interface";
import {Router} from "@angular/router";
import {AuthQuery} from "../auth/store/auth.query";
import {CartQuery} from "../cart/store/cart.query";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  user: UserInterface | null = null;
  cartLength!: number;

  constructor(private authQuery: AuthQuery,
              private authService: AuthService,
              private cartQuery: CartQuery,
              public router: Router) {
    this.authQuery.isSelectUser$.subscribe((result: UserInterface | null) => this.user = result);
    this.cartQuery.selectCartLength$.subscribe(number => this.cartLength = number);
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }
}
