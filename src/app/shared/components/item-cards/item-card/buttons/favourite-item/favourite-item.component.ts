import { Component } from '@angular/core';

@Component({
  selector: 'ishop-favourite-item',
  templateUrl: './favourite-item.component.html',
  styleUrls: ['./favourite-item.component.scss'],
})
export class FavouriteItemButtonComponent {
  isActive = false;

  onFavouriteItemClick() {
    this.isActive = !this.isActive;
  }
}
