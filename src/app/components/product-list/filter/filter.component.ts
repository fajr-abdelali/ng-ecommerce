import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductFilter } from 'src/app/interfaces/Product-filter.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() brands?: string[];
  @Output() filters = new EventEmitter<ProductFilter>();
  productsFilter?: ProductFilter = { brand: [], color: [], size: [] };

  getBrand(brand: string): void {
    if (this.productsFilter) {
      let index = this.productsFilter.brand.indexOf(brand);
      console.log(this.productsFilter);
      console.log(index)
      if (index !== -1) {
        this.productsFilter.brand.splice(index, 1)
      } else {
        this.productsFilter.brand.push(brand);

      }
      this.filters.emit(this.productsFilter);
    }
  }

}
