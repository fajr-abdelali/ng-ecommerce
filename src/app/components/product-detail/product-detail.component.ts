import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IProduct from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

import ICartItem from 'src/app/interfaces/cart.interface';
import { Store, select } from '@ngrx/store';
import * as fromCart from 'src/app/store/cart/index';
import * as fromProduct from 'src/app/store/product/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$?: Observable<IProduct | undefined>;
  constructor(private productService: ProductService, private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.product$ = this.store.select(fromProduct.selectProductById(productId))
    })
  }

  getProduct(id: number) {
    return this.store.select(fromProduct.selectProductById(id))
    // this.productService.getProductById(id).subscribe(product => this.product = product);
  }

  addCart(): void {
    this.product$?.subscribe(product => {
      this.store.dispatch(fromCart.addToCart({
        cartItem: {
          product,
          quantity: 1
        }
      }));
    });
  }

}
