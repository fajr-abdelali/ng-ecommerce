import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss']
})
export class CheckListComponent {
  @Input() brand: string = '';
  @Output() selectedBrand = new EventEmitter<string>();

  onCheck(value:string) {
      this.selectedBrand.emit(value)
  }

}
