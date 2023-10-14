import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators'
import * as fromCart from './index';
import { CartService } from 'src/app/services/cart.service';
import ICartItem from "src/app/interfaces/cart.interface";

@Injectable()
export class CartEffects {
    constructor(private readonly actions$: Actions, private readonly cartService: CartService) {
    }

    getCart$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromCart.getCart.type),
            switchMap(() => this.cartService.getCart()),
            map((cart: ICartItem[]) => fromCart.getCartSuccess({ cart }))
        )
    )

    addToCart$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromCart.addToCart.type),
            switchMap(({ cartItem }) => this.cartService.addToCart(cartItem)),
            map((cartItem: ICartItem) => fromCart.addToCartSuccess({ cartItem }))
        )
    )

    deleteCartItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromCart.deleteCartItem.type),
            switchMap(({ cartItem }) => this.cartService.deleteCartItem(cartItem)),
            map((cartItem: ICartItem) => fromCart.deleteCartItemSuccess({ cartItem }))
        )
    )

    updateCartItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromCart.updateCartItem.type),
            switchMap(({ cartItem }) => this.cartService.updateCartItem(cartItem)),
            map((cartItem: ICartItem) => fromCart.updateCartItemSuccess({ cartItem }))
        )
    )
}