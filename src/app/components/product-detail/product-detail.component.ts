import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IProduct from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

import ICartItem from 'src/app/interfaces/cart.interface';
import { Store } from '@ngrx/store';
import * as fromCart from 'src/app/store/cart/index';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product?: IProduct;
  productId?: number;
  constructor(private productService: ProductService, private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.productId ? this.getProduct(this.productId) : console.log('there no product by this id')
    })
  }

  getProduct(id: number) {
    this.productService.getProductById(id).subscribe(product => this.product = product);
  }

  addCart(): void {
    this.store.dispatch(fromCart.addToCart({
      cartItem: {
        product: this.product,
        quantity: 1
      }
    }));
  }

}
