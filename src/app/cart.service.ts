import {Injectable} from '@angular/core';
import {ItemInterface} from "./shared/item.interface";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: BehaviorSubject<ItemInterface[]> = new BehaviorSubject<ItemInterface[]>([]);

  constructor() { }

  addItemToCart(item: ItemInterface) {
    const oldCart = this.cart.getValue();
    oldCart.push(item);
    this.cart.next(oldCart);
  }

  removeItem(item: ItemInterface) {
    let oldCart = this.cart.getValue();
    oldCart = oldCart.filter(selectedItem => selectedItem._id !== item._id);
    this.cart.next(oldCart);
  }

}
