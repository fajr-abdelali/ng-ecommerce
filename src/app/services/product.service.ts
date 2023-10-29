import { Injectable } from '@angular/core';
import IProduct from '../interfaces/product.interface';
import { Observable, of } from 'rxjs';
import { Products } from '../data/products.data'

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    private productList: IProduct[] = Products;

    constructor() { }

    getProducts(): Observable<IProduct[]> {
        return of(this.productList)
    }

    getProductById(id: number): Observable<IProduct | undefined> {
        return of(this.productList.find(product => product.id == id))
    }

}