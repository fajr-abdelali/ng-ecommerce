import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() currentPage: number = 1;
  @Input() totalPage: number = 1;
  @Output() pageSelected = new EventEmitter<number>();

  onPageChange(pageNumber:number):void{
    this.pageSelected.emit(pageNumber);
  }

}
