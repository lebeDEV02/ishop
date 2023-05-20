import { Component } from '@angular/core';

@Component({
  selector: 'ishop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems = [1,2,3]
}
