import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ishop-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent {
  @Input() itemCardTitle!: string;
  @Input() itemCardPrice!: number;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}
  onItemCardClick(event: Event) {
    this.router.navigate(['123123'], { relativeTo: this.route });
  }

  preventPropogation(event: Event) {
    event.stopPropagation();
  }
}
