import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ItemInterface} from "../shared/item.interface";
import {CartService} from "../cart.service";
import {debounceTime, distinctUntilChanged, map, switchMap, tap} from "rxjs/operators";
import {BehaviorSubject, combineLatest, Observable, of, ReplaySubject, Subject} from "rxjs";
import {CartQuery} from "../cart/store/cart.query";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {

  card$?: Observable<ItemInterface[]>;
  filteredProducts$?: Observable<ItemInterface[]>;
  products$ = new ReplaySubject<ItemInterface[]>(1);
  searchValue$ = new BehaviorSubject<string>('');


  constructor(private cartService: CartService, private cardQuery: CartQuery, private router: Router) {

  }

  ngOnInit(): void {
    this.getProducts();
    this.card$ = this.cardQuery.selectCard$;
    const searchValueChanges$ = this.searchValue$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    );
    this.filteredProducts$ = combineLatest([this.products$, this.card$, searchValueChanges$]).pipe(
      map(([items, cardItems, term]) => {
        return items.filter(product => !cardItems.some(c => c.id == product.id))
        .filter(product => product.productName.toLowerCase().indexOf(term.toLowerCase()) !== -1)
      })
    )
  }

  getProducts() {
    this.cartService.initProducts().subscribe((res: ItemInterface[]) => {
      this.products$.next(res);
    });
  }

  addItemToCart(item: ItemInterface) {
    this.cartService.addItemToCart(item);
  }

  goToInfo(item: ItemInterface) {
    this.cartService.selectedItem(item);
    this.router.navigateByUrl('/info');
  }

  searchProduct(value: string) {
    this.searchValue$.next(value);
  }
}
