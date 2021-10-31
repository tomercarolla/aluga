import { Component, OnInit } from '@angular/core';
import {db} from "../../db";
import {ItemInterface} from "../shared/item.interface";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: ItemInterface[] = db;

  constructor() { }

  ngOnInit(): void {
  }

}
