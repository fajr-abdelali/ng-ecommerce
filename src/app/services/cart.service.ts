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
            image: ["https://www.volcom.com/cdn/shop/files/A4632300_BSN_100_1188x1584_crop_center.jpg?v=1690489963"],
            rating: { rate: 4, count: 20 }
        },
        {
            id: 2,
            title: "Muzzer Fuzzar Zip Jacket - Squadron Green",
            price: 100,
            category: "sweatshirt",
            image: ["https://www.volcom.com/cdn/shop/products/A4832306_SQD_30_1188x1584_crop_center.jpg?v=1697499737",
                "https://www.volcom.com/cdn/shop/products/A4832306_SQD_F_1188x1584_crop_center.jpg?v=1697499737",
                "https://www.volcom.com/cdn/shop/products/A4832306_SQD_B_1188x1584_crop_center.jpg?v=1697499737"],
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
        return this.cart.every(item => item.product.id !== cartItem.product.id)
    }

}