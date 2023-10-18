import { createReducer, on } from '@ngrx/store';

import { ICartState } from './cart.model';
import * as fromCart from './index';

export const initialCartState: ICartState = {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0,
    isLoading: false,
}

const reducer = createReducer<ICartState>(
    initialCartState,
    on(fromCart.getCart, (state) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(fromCart.getCartSuccess, (state, { cart }) => {
        return {
            ...state,
            isLoading: false,
            cart
        };
    }),
    on(fromCart.addToCart, (state) => {
        return {
            ...state,
            isLoading: true
        };
    }),
    on(fromCart.addToCartSuccess, (state, { cartItem }) => {
        const existingCartItem = state.cart.find(item => item.product.id === cartItem.product.id);
        if (existingCartItem) {
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.product.id === cartItem.product.id) {
                        return {
                            ...item,
                            quantity: item.quantity + cartItem.quantity
                        };
                    } else {
                        return item;
                    }
                }), isLoading: false
            };
        } else {
            return {
                ...state,
                cart: [...state.cart, cartItem],
                isLoading: false
            };
        }
    }),
    on(fromCart.updateCartItem, (state) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(fromCart.updateCartItemSuccess, (state, { cartItem }) => {
        return {
            ...state,
            cart: state.cart.map((crtItem) => crtItem.product.id === cartItem.product.id ? cartItem : crtItem)
        }
    }),
    on(fromCart.deleteCartItem, (state) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(fromCart.deleteCartItemSuccess, (state, { cartItem }) => {
        return {
            ...state,
            isLoading: false,
            cart: state.cart.filter((cartItm) => cartItm.product.id !== cartItem.product.id)
        }
    })
)

export function cartReducer(state = initialCartState, actions: any): ICartState {
    return reducer(state, actions)
}