import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './header/components/about-us/about-us.component';
import { NavigationComponent } from './header/components/navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { StakeholderAboutComponent } from './footer/components/stakeholder-about/stakeholder-about.component';
import { FooterNavigationComponent } from './footer/components/footer-navigation/footer-navigation.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    AboutUsComponent,
    NavigationComponent,
    FooterComponent,
    StakeholderAboutComponent,
    FooterNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
