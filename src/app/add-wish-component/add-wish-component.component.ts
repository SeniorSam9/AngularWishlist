import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/WishItem';

@Component({
  selector: 'add-wish',
  templateUrl: './add-wish-component.component.html',
  styleUrl: './add-wish-component.component.css',
})
export class AddWishComponentComponent {
  @Output() addWishEvent = new EventEmitter<WishItem>();
  newWishText = '';

  addNewWish() {
    this.addWishEvent.emit(new WishItem(this.newWishText));
    this.clearInputBox();
  }

  private clearInputBox() {
    this.newWishText = '';
  }
}
