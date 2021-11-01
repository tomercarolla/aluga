import {Component, OnInit} from '@angular/core';
import {db} from "../../db";
import {ItemInterface} from "../shared/item.interface";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: ItemInterface[] = db;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  addItemToCart(item: ItemInterface) {
    this.cartService.addItemToCart(item);
  }

  goToInfo(item: ItemInterface) {

  }

  searchProduct(value: string) {
    console.log(value);
  }
}
