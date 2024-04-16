import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/models/WishItem';

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css',
})
export class WishListComponent {
  @Input() wishes: Array<WishItem> = [];

  toggleIsComplete(item: WishItem) {
    item.isCompleted = !item.isCompleted;
  }
}
