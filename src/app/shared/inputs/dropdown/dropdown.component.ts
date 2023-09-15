import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() name: string = 'name';
  @Input() list: string[] = ['1', '2', '3', '4']
  uniqueId:string = Math.random().toString(36).substring(2, 15);

}
