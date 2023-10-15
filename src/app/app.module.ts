import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IconsModule } from './shared/module/icons/icons.module';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './shared/slider/slider.component';
import { NewArrivalComponent } from './pages/home/new-arrival/new-arrival.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ProductComponent } from './shared/product/product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterComponent } from './components/product-list/filter/filter.component';
import { DropdownComponent } from './shared/inputs/dropdown/dropdown.component';
import { HeaderComponent } from './shared/header/header.component';
import { WishButtonComponent } from './shared/wish-button/wish-button.component';
import { SuggestionsComponent } from './components/product-detail/suggestions/suggestions.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductStoreModule } from './store/product/product-store.module';
import { CartStoreModule } from './store/cart/cart-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    NewArrivalComponent,
    ProductListComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    ProductComponent,
    FilterComponent,
    DropdownComponent,
    HeaderComponent,
    WishButtonComponent,
    SuggestionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    IconsModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({}),
    ProductStoreModule,
    CartStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
