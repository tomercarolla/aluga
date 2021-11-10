import {Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {ItemInterface} from "../shared/item.interface";

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent implements OnInit {

  selectedProduct: ItemInterface[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.currentProduct$.subscribe(product => this.selectedProduct = product);
  }

}
