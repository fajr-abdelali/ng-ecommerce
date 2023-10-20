import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from './module/icons/icons.module';

import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './navbar/cart/cart.component'
import { FooterComponent } from './footer/footer.component';
import { CartItemComponent } from './navbar/cart/cart-item/cart-item.component';
import { LogoComponent } from './logo/logo.component';


@NgModule({
  declarations: [
    NavbarComponent,
    CartComponent,
    FooterComponent,
    CartItemComponent,
    LogoComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    IconsModule,
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    FontAwesomeModule,
  ]
})
export class SharedModule { }
