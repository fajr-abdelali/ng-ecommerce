import { Component, Input } from '@angular/core';
import ICartItem from 'src/app/interfaces/cart.interface';
import { Store } from '@ngrx/store';

import * as fromCart from 'src/app/store/cart/index';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() cartItem?:ICartItem;

  constructor(private store:Store){}

  onDeleteCartItem(cartItem:ICartItem):void{
    this.store.dispatch(fromCart.deleteCartItem({cartItem}));
  }

}
