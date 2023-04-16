import { Component } from '@angular/core';

@Component({
  selector: 'ishop-to-cart',
  templateUrl: './to-cart.component.html',
  styleUrls: ['./to-cart.component.scss'],
})
export class ToCartComponent {
  isSelected = false;

  onToCartButtonClick() {
    this.isSelected = !this.isSelected;
  }

  get buttonText() {
    return this.isSelected ? 'В корзине' : 'В корзину';
  }
}
