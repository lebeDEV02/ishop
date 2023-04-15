import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { IdentityRoutingModule } from './identity-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RegisterModule, LoginModule, IdentityRoutingModule],
})
export class IdentityModule {}
