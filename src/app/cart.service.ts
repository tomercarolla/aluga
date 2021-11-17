import {Injectable} from '@angular/core';
import {ItemInterface} from "./shared/item.interface";
import {BehaviorSubject, Observable, ReplaySubject, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {CartState, CartStore} from "./cart/store/cart.store";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //cart: BehaviorSubject<ItemInterface[]> = new BehaviorSubject<ItemInterface[]>([]);

  product?: ItemInterface;

  private productSource: BehaviorSubject<ItemInterface[]> = new BehaviorSubject<ItemInterface[]>([]);

  currentProduct$ = this.productSource.asObservable();

  constructor(private cartStore: CartStore, private http: HttpClient) {
  }

  initProducts(): Observable<ItemInterface[]> {
    return this.http.get<ItemInterface[]>(`http://localhost:3000/products`);
  }

  addItemToCart(item: ItemInterface) {
    // const oldCart = this.cart.getValue();
    // oldCart.push(item);
    //this.cart.next(oldCart);
    this.cartStore.update((cartState: CartState) => {
      return {
        //דריסה של הCARTSTATE
        // משנה בו את האובייקט CART
        // מוסיף לו את CARTSTATE.CART
        // לוקח את CARTSTATE הקיים במערך ומשרשר את ITEM
        ...cartState, card: [...cartState.card, item]
      }
    })
  }

  removeItem(item: ItemInterface) {
    // let oldCart = this.cart.getValue();
    // oldCart = oldCart.filter(selectedItem => selectedItem.id !== item.id);
    //this.cart.next(oldCart);
    this.cartStore.update((cartState: CartState) => {
      const card = cartState.card.filter(selectedItem => selectedItem.id !== item.id);
      return {
        ...cartState, card
      }
    })
  }

  selectedItem(item: ItemInterface) {
    const product = this.productSource.getValue();
    product.push(item)
    this.productSource.next(product);
  }

}
