import { Component } from '@angular/core';

@Component({
  selector: 'app-wish-button',
  templateUrl: './wish-button.component.html',
  styleUrls: ['./wish-button.component.scss']
})
export class WishButtonComponent {
  isClicked = false;

  toggleColor() {
    this.isClicked = !this.isClicked;
  }
}
