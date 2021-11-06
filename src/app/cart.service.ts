import {Injectable} from '@angular/core';
import {ItemInterface} from "./shared/item.interface";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: BehaviorSubject<ItemInterface[]> = new BehaviorSubject<ItemInterface[]>([]);

  constructor(private http: HttpClient) { }

  initProducts() {
    return this.http.get<ItemInterface[]>(`http://localhost:3000/products`);
  }

  getProducts(value: string): Observable<ItemInterface[]> {
    return this.http.get<ItemInterface[]>(`http://localhost:3000/products?q=${value}`).pipe(
      tap((result: any) => result)
    );
  }

  addItemToCart(item: ItemInterface) {
    const oldCart = this.cart.getValue();
    oldCart.push(item);
    this.cart.next(oldCart);
  }

  removeItem(item: ItemInterface) {
    let oldCart = this.cart.getValue();
    oldCart = oldCart.filter(selectedItem => selectedItem.id !== item.id);
    this.cart.next(oldCart);
  }

}
