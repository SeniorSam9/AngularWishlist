import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/WishItem';

@Component({
  selector: 'add-wish',
  templateUrl: './add-wish-component.html',
  styleUrl: './add-wish-component.css',
})
export class AddWishComponent {
  @Output() addWishEvent = new EventEmitter<WishItem>();
  newWishText = '';

  addNewWish() {
    // this will execute "items.push($event)"
    this.addWishEvent.emit(new WishItem(this.newWishText));
    this.clearInputBox();
  }

  private clearInputBox() {
    this.newWishText = '';
  }
}
