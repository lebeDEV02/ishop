import { Component, Input } from '@angular/core';
import { ItemCard } from 'app/shared/interfaces';
import { itemCards } from 'consts/item-cards.mock';

@Component({
  selector: 'ishop-item-cards',
  templateUrl: './item-cards.component.html',
  styleUrls: ['./item-cards.component.scss'],
})
export class ItemCardsComponent {
  @Input() itemCardsTitle!: string;
  @Input() itemCards: Array<ItemCard> = itemCards;
}
