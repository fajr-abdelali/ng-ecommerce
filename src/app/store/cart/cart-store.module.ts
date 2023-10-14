import { NgModule } from "@angular/core";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { CartEffects } from "./cart.effects";
import { cartReducer } from "./cart.reducers";

@NgModule({
    imports: [
        StoreModule.forFeature('cart', cartReducer),
        EffectsModule.forFeature([CartEffects])
    ]
})
export class CartStoreModule { }