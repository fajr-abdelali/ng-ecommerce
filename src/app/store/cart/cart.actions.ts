import { createAction, props } from "@ngrx/store";
import ICartItem from "src/app/interfaces/cart.interface";

const prefix = '[Cart]';

export const getCart = createAction(`${prefix} Get Cart`);
export const getCartSuccess = createAction(`${getCart.type} Success`, props<{ cart: ICartItem[]; }>());

export const addToCart = createAction(`${prefix} Create Cart Item`, props<{
    cartItem: Partial<ICartItem>;
}>()
);
export const addToCartSuccess = createAction(`${addToCart.type} Success`, props<{ cartItem: ICartItem }>());


export const deleteCartItem = createAction(`${prefix} Delete Cart Item`, props<{ cartItem: ICartItem }>());
export const deleteCartItemSuccess = createAction(`${deleteCartItem.type} Success`, props<{ cartItem: ICartItem }>());

export const updateCartItem = createAction(`${prefix} Update Cart Item`, props<{ cartItem: ICartItem }>());
export const updateCartItemSuccess = createAction(`${updateCartItem.type} Success`,props<{cartItem:ICartItem}>())