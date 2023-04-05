import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './header/components/about-us/about-us.component';
import { NavigationComponent } from './header/components/navigation/navigation.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AboutUsComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
