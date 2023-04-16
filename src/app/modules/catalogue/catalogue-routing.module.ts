import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IphoneComponent } from './components/iphone/iphone.component';
import { MacComponent } from './components/mac/mac.component';
import { AirpodsComponent } from './components/airpods/airpods.component';
import { IpadComponent } from './components/ipad/ipad.component';
import { WatchComponent } from './components/watch/watch.component';
import { SelectedItemComponent } from 'app/shared/components/selected-item/selected-item.component';

const routes: Routes = [
  {
    path: 'iphone',
    component: IphoneComponent,
  },
  {
    path: 'mac',
    component: MacComponent,
  },
  {
    path: 'airpods',
    component: AirpodsComponent,
  },
  {
    path: 'ipad',
    component: IpadComponent,
  },
  {
    path: 'watch',
    component: WatchComponent,
  },
  {
    path: ':product/:id',
    component: SelectedItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogueRoutingModule {}
