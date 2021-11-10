import { Store, StoreConfig } from '@datorama/akita';
import {ItemInterface} from "../../shared/item.interface";
import {Injectable} from "@angular/core";

export interface CartState {
  card: ItemInterface[];
}

export function createInitialState(): CartState {
  return {
    card: [],
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({ name: 'card' })
export class CartStore extends Store<CartState> {
  constructor() {
    super(createInitialState());
  }
}
