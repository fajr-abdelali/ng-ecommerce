import { Injectable } from '@angular/core';
import ICartItem from '../interfaces/cart.interface';
import IProduct from '../interfaces/product.interface';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    constructor() { }

    private products: IProduct[] = [
        {
            id: 1,
            title: "Product 1",
            price: 10,
            category: "Category A",
            image: ["image1.jpg"],
            rating: { rate: 4, count: 20 }
        },
        {
            id: 2,
            title: "Product 2",
            price: 15,
            category: "Category B",
            image: ["image2.jpg"],
            rating: { rate: 3, count: 15 }
        }
    ];

    private cart: ICartItem[] = [
        {
            product: this.products[0],
            quantity: 2
        },
        {
            product: this.products[1],
            quantity: 1
        }
    ]

    getCart(): Observable<ICartItem[]> {
        return of(this.cart)
    }

    addToCart(cartItem: ICartItem): Observable<ICartItem> {
        if (!this.existInCart(cartItem)) {
            this.cart = [...this.cart, cartItem]
        }
        return of(cartItem)
    }

    updateCartItem(updatecartItem: ICartItem): Observable<ICartItem> {
        this.cart = this.cart.map((cartItem) => updatecartItem.product.id === cartItem.product.id ? updatecartItem : cartItem)
        return of(updatecartItem);
    }

    deleteCartItem(cartItem: ICartItem): Observable<ICartItem> {
        this.cart = this.cart.filter((cartItm) => cartItm !== cartItem)
        return of(cartItem)
    }

    existInCart = (cartItem: ICartItem): boolean => {
        return this.cart.every(item => item !== cartItem)
    }

}