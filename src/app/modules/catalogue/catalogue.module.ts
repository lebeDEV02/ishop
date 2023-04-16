import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { IphoneComponent } from './components/iphone/iphone.component';
import { MacComponent } from './components/mac/mac.component';
import { AirpodsComponent } from './components/airpods/airpods.component';
import { IpadComponent } from './components/ipad/ipad.component';
import { WatchComponent } from './components/watch/watch.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [
    IphoneComponent,
    MacComponent,
    AirpodsComponent,
    IpadComponent,
    WatchComponent,
  ],
  imports: [CommonModule, CatalogueRoutingModule, SharedModule],
})
export class CatalogueModule {}
