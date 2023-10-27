import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './shared/slider/slider.component';
import { NewArrivalComponent } from './pages/home/new-arrival/new-arrival.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ProductComponent } from './shared/product/product.component';
import { FilterComponent } from './components/product-list/filter/filter.component';
import { DropdownComponent } from './shared/inputs/dropdown/dropdown.component';
import { HeaderComponent } from './shared/header/header.component';
import { WishButtonComponent } from './shared/wish-button/wish-button.component';
import { SuggestionsComponent } from './components/product-detail/suggestions/suggestions.component';
import { SharedModule } from './shared/shared.module';
import { BrandsComponent } from './pages/home/brands/brands.component'

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductStoreModule } from './store/product/product-store.module';
import { CartStoreModule } from './store/cart/cart-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
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
    BrandsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({}),
    ProductStoreModule,
    CartStoreModule,
    SharedModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
