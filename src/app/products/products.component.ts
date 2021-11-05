import {Component, OnInit} from '@angular/core';
import {ItemInterface} from "../shared/item.interface";
import {CartService} from "../cart.service";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: ItemInterface[] = [];
  searchValue$: Subject<string> = new Subject<string>();

  constructor(private cartService: CartService) {
    this.cartService.initProducts().subscribe(products => this.products = products);
  }

  ngOnInit(): void {
    this.searchValue$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.cartService.getProducts(term))
    ).subscribe((items: ItemInterface[]) => this.products = items);
  }

  addItemToCart(item: ItemInterface) {
    this.cartService.addItemToCart(item);
  }

  goToInfo(item: ItemInterface) {

  }

  searchProduct(value: string) {
    this.searchValue$.next(value);
  }
}
