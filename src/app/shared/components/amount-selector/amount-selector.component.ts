import { Component } from '@angular/core';

@Component({
  selector: 'ishop-amount-selector',
  templateUrl: './amount-selector.component.html',
  styleUrls: ['./amount-selector.component.scss']
})
export class AmountSelectorComponent {
  value = 1

  handleDecrease() {
    if (this.value <= 1){
      return;
    }

    this.value -= 1;
  }

  handleIncrease() {
    this.value += 1;
  }
}
