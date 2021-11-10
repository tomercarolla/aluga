import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {ItemInterface} from "../shared/item.interface";
import {CartQuery} from "./store/cart.query";
import {CartStore} from "./store/cart.store";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {

  items: ItemInterface[] = [];
  selected: Date | null;

  constructor(private cartQuery: CartQuery, private cartService: CartService) {
    //this.cartService.cart.subscribe((cart: ItemInterface[]) => this.items = cart);
    this.cartQuery.selectCard$.subscribe((cart: ItemInterface[]) => this.items = cart);
    this.selected = new Date();
  }

  ngOnInit(): void {
  }

  removeItemFromCart(item: ItemInterface) {
    this.cartService.removeItem(item);
  }
}
