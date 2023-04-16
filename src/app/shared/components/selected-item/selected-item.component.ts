import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { selectedItem } from 'consts/selected-item.mock';
@Component({
  selector: 'ishop-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.scss'],
})
export class SelectedItemComponent {
  constructor(private readonly route: ActivatedRoute) {}

  selectedItem = selectedItem;
}
