import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import IProduct from '../interfaces/product.interface';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    private productList?: IProduct[];
    private baseURL: string = 'http://localhost:3000/products';

    constructor(private http: HttpClient) { }

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.baseURL);
    }

    getProductById(id: number): Observable<IProduct | undefined> {
        const url=`${this.baseURL}/${id}`
        return this.http.get<IProduct>(url);
    }

}