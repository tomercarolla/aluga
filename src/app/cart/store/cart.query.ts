import {Query} from '@datorama/akita';
import {CartState, CartStore} from "./cart.store";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ItemInterface} from "../../shared/item.interface";
import {map} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class CartQuery extends Query<CartState> {

  selectCard$: Observable<ItemInterface[]> = this.select('card');

  selectCartLength$: Observable<number> = this.select('card').pipe(
    map((items: ItemInterface[]) => items.length)
  )

  constructor(protected store: CartStore) {
    super(store);
  }
}
