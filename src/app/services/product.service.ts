import { Injectable } from '@angular/core';
import IProduct from '../interfaces/product.interface';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    private productList: IProduct[] = [
        {
            id: Math.random(),
            title: "string",
            price: 20,
            description: "string kodj",
            category: ["jacket", "coat"],
            image: ["https://www.volcom.de/cdn/shop/products/A1732307_BLK_2.jpg?v=1686559734", "https://www.volcom.de/cdn/shop/products/A1732307_BLK_4.jpg?v=1686559734", "https://www.volcom.de/cdn/shop/products/A1732307_BLK_5.jpg?v=1686559734",
                "https://www.volcom.de/cdn/shop/products/A1732307_BLK_1.jpg?v=1686559734", "https://www.volcom.de/cdn/shop/products/A1732307_BLK_11.jpg?v=1686559734"],
            rating: {
                rate: 2.4,
                count: 120,
            }
        },
        {
            id: Math.random(),
            title: "Nando Von Arb Sweatshirt - PONDEROSA PINE",
            price: 90,
            description: "string kodj",
            category: ["Sweatshirt "],
            image: ["https://www.volcom.de/cdn/shop/products/A4632306_PPI_F_1188x1584_crop_center.jpg?v=1686559763", "https://www.volcom.de/cdn/shop/products/A4632306_PPI_1_1188x1584_crop_center.jpg?v=1686559763", "https://www.volcom.de/cdn/shop/products/A4632306_PPI_B_1188x1584_crop_center.jpg?v=1686559763"],
            rating: {
                rate: 2.4,
                count: 120,
            }
        },
        {
            id: Math.random(),
            title: "Nevermine Sweatshirt - WINE",
            price: 90,
            description: "string kodj",
            category: ["Sweatshirt "],
            image: ["https://www.volcom.de/cdn/shop/products/A4632309_WNE_F_a46eb9c2-ecfc-4f3c-973a-15b02f580129_1188x1584_crop_center.jpg?v=1697182578", "https://www.volcom.de/cdn/shop/products/A4632309_WNE_B_b8ab3da6-15eb-49d5-be19-cd7efcda8ce7_1188x1584_crop_center.jpg?v=1697182578"],
            rating: {
                rate: 2.4,
                count: 120,
            }
        },
        {
            id: Math.random(),
            title: "Nevermine Sweatshirt - BLACK",
            price: 90,
            description: "string kodj",
            category: ["Sweatshirt "],
            image: ["https://www.volcom.de/cdn/shop/products/A4632309_BLK_F_1188x1584_crop_center.jpg?v=1686559758", "https://www.volcom.de/cdn/shop/products/A4632309_BLK_B_1188x1584_crop_center.jpg?v=1686559758"],
            rating: {
                rate: 2.4,
                count: 120,
            }
        }
    ]

    constructor() { }

    getProducts(): Observable<IProduct[]> {
        return of(this.productList)
    }

}