import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, map, of } from 'rxjs';
import * as fromProduct from 'src/app/store/product/index';
import IProduct from 'src/app/interfaces/product.interface';
import { ProductFilter } from 'src/app/interfaces/Product-filter.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  // Properties
  products$?: Observable<IProduct[]>;
  isLoading$?: Observable<boolean>;
  allBrands: string[] = [];
  allOptions: string[] = [];
  filterModel: ProductFilter = { color: [], size: [], brand: [] };
  selectedSortOption: string = '';

  constructor(private readonly store: Store, private cdr: ChangeDetectorRef) { }

  // Lifecycle Hook
  ngOnInit(): void {
    this.initDispatch();
    this.initSubscriptions()
  }

  private initDispatch(): void {
    this.store.dispatch(fromProduct.getProducts())
  }

  private initSubscriptions() {
    this.store.pipe(select(fromProduct.selectProductList)).subscribe(products => {
      this.products$ = this.aplyFilters(products);
      this.extractBrandsAndOptions(products);
      this.cdr.detectChanges();
    });
    this.isLoading$ = this.store.pipe(select(fromProduct.selectProductIsLoading)) as Observable<boolean>;
  }

  private aplyFilters(products: IProduct[]): Observable<IProduct[]> {
    return of(products.filter(product =>
      this.filterModel.brand.length === 0 || this.filterModel.brand.includes(product.brand || '')
    ));
  }

  private extractBrandsAndOptions(products: IProduct[]): void {
    this.allBrands = [... new Set(products.map(product => product.brand || 'other'))];
    this.allOptions = this.extractUniqueOptions(products);
  }

  private extractUniqueOptions(products: IProduct[]): string[] {
    const allOptions = products
      .map((product) => product.options)
      .filter((options) => !!options)
      .map((options) => options!.map((option) => option.name))
      .reduce((acc, curr) => [...acc, ...curr], []);
    return [...new Set(allOptions)];
  }

  getFilters(filters: ProductFilter) {
    this.filterModel = filters;
    this.initSubscriptions();
  }

  onSortChange(sortOption: string) {
    this.selectedSortOption = sortOption;
    this.products$ = this.products$ && this.sortProducts(this.products$, this.selectedSortOption);
  }

  sortProducts(products$: Observable<IProduct[]>, sortOption: string): Observable<IProduct[]> {
    return products$.pipe(
      map(products => {
        return products.slice().sort((a, b) => {
          if (sortOption == 'price') {
            return a.price - b.price;
          } else if (sortOption == 'newest') {
            return a.id - b.id;
          }
          return 0
        });
      })
    );
  }

}
