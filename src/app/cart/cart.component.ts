import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";
import {ItemInterface} from "../shared/item.interface";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: ItemInterface[] = [];
  selected: Date | null;

  constructor(private cartService: CartService) {
    this.cartService.cart.subscribe((cart: ItemInterface[]) => this.items = cart);
    this.selected = new Date();
  }

  ngOnInit(): void {
  }

  removeItemFromCart(item: ItemInterface) {
    this.cartService.removeItem(item);
  }
}
