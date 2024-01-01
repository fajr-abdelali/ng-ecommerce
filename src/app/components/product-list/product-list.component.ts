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

  currentPage: number = 1;
  itemsPerPage: number = 12; // You can adjust this as needed
  totalItems: number = 0;
  totalPage: number = 0;

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

    const filtredProducts = products.filter(product =>
      this.filterModel.brand.length === 0 || this.filterModel.brand.includes(product.brand || '')
    )

    const newProducts = this.aplyPagination(filtredProducts);

    return of(newProducts);
  }

  private aplyPagination(products: IProduct[]): IProduct[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    this.totalItems = products.length;
    this.totalPage = Math.ceil(this.totalItems/this.itemsPerPage);

    return products.slice(startIndex, endIndex);
  }

  // Method to handle page change
  onPageChange(pageNumber: any): void {
    console.log(pageNumber)
    this.currentPage = parseInt(pageNumber);
    this.initSubscriptions();
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

  getFilters(filters: ProductFilter): void {
    this.filterModel = filters;
    this.initSubscriptions();
  }

  onSortChange(sortOption: string): void {
    this.selectedSortOption = sortOption;
    this.products$ = this.products$ && this.sortProducts(this.products$, this.selectedSortOption);
  }

  private sortProducts(products$: Observable<IProduct[]>, sortOption: string): Observable<IProduct[]> {
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
