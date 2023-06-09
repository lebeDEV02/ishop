import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemCardComponent } from './components/item-cards/item-card/item-card.component';
import { ItemCardsComponent } from './components/item-cards/item-cards.component';
import { FooterNavigationComponent } from './components/footer/footer-navigation/footer-navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { StakeholderAboutComponent } from './components/footer/stakeholder-about/stakeholder-about.component';
import { AboutUsComponent } from './components/header/about-us/about-us.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { FavouriteItemButtonComponent } from './components/item-cards/item-card/buttons/favourite-item/favourite-item.component';
import { ToCartComponent } from './components/item-cards/item-card/buttons/to-cart/to-cart.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AboutUsComponent,
    NavigationComponent,
    FooterComponent,
    StakeholderAboutComponent,
    FooterNavigationComponent,
    ItemCardComponent,
    ItemCardsComponent,
    FavouriteItemButtonComponent,
    ToCartComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ItemCardComponent,
    ItemCardsComponent,
  ],
})
export class SharedModule {}
