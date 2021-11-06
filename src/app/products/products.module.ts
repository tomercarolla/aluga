import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {ProductsComponent} from "./products.component";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

const MAT_MODULES = [
  MatInputModule, MatButtonModule
];

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ...MAT_MODULES
  ]
})
export class ProductsModule { }
