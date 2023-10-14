import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProductEffects } from './product.effects';
import { productReducer } from './product.reducers';

@NgModule({
    imports: [
        StoreModule.forFeature('product', productReducer),
        EffectsModule.forFeature([ProductEffects])
    ]
})
export class ProductStoreModule { }