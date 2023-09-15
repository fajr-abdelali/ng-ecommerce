import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee, faUser, faShoppingCart,faHeart,faStar } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class IconsModule { 
  constructor(library:FaIconLibrary){
    library.addIcons(faCoffee, faUser, faShoppingCart,faHeart,faStar)
  }
}
