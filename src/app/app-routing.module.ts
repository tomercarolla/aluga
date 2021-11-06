import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemInfoComponent} from "./item-info/item-info.component";
import {CartComponent} from "./cart/cart.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'products', loadChildren: () => import('./products/products.module').then(p => p.ProductsModule), canActivate: [AuthGuard]},
  {path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  {path: 'info', component: ItemInfoComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
