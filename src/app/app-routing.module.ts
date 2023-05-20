import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'identity',
    loadChildren: () =>
      import('./modules/identity/identity.module').then(
        (m) => m.IdentityModule
      ),
  },
  {
    path: 'catalogue',
    loadChildren: () =>
      import('./modules/catalogue/catalogue.module').then(
        (m) => m.CatalogueModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./modules/cart/cart.module').then(
        (m) => m.CartModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
