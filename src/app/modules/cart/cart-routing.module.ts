import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { OrderPlacementComponent } from './components/order-placement/order-placement.component';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
  },
  {
    path: 'order-placement',
    component: OrderPlacementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
