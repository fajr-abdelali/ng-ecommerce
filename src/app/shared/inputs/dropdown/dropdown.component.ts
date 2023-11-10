import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() name: string = 'name';
  @Input() list: string[] = ['1', '2', '3', '4'];
  @Output() selectedValue = new EventEmitter<string>();

  onOptionSelected(value:string): void {
    this.selectedValue.emit(value);
  }

}
