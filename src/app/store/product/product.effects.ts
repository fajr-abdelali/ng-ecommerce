import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as fromProducts from './index';
import { ProductService } from 'src/app/services/product.service';
import IProduct from 'src/app/interfaces/product.interface';

@Injectable()
export class ProductEffects {
    constructor(private readonly actions$: Actions, private readonly productService: ProductService) {
    }

    getProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromProducts.getProducts.type),
            switchMap(() => this.productService.getProducts()),
            map((products: IProduct[]) => fromProducts.getProductsSuccess({ products }))
        )
    )
}