import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromProduct from 'src/app/store/product/index';
import IProduct from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$?: Observable<IProduct[]>;
  isLoading$?: Observable<boolean>;
  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.initDispatch();
    this.initSubscriptions()
  }

  private initDispatch(): void {
    this.store.dispatch(fromProduct.getProducts())
  }

  private initSubscriptions() {
    this.products$ = this.store.pipe(select(fromProduct.selectProductList)) as Observable<IProduct[]>;
    this.isLoading$ = this.store.pipe(select(fromProduct.selectProductIsLoading)) as Observable<boolean>;
  }

}
