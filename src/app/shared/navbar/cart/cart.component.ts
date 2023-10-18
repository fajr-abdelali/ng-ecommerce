import { Component,OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { Observable } from 'rxjs';
import ICartItem from 'src/app/interfaces/cart.interface';
import * as fromCart from 'src/app/store/cart/index';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart$? :Observable<ICartItem[]>;
  isLoading$?:Observable<boolean>;

  constructor(private readonly store:Store){}

  ngOnInit(): void {
    this.initDispatch();
    this.initSubscriptions();
  }

  private initDispatch():void{
    this.store.dispatch(fromCart.getCart());
  }

  private initSubscriptions():void{
    this.cart$ = this.store.pipe(select(fromCart.selectCartList));
    this.isLoading$ = this.store.pipe(select(fromCart.selectCartLoading))
  }

}
