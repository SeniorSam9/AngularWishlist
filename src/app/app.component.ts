import { Component } from '@angular/core';
import { WishItem } from '../shared/models/WishItem';

//component charactare
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

// app.component.html class
export class AppComponent {
  // any attribute here can be used in .component.html as between {{  }}
  title = 'wishlist';
  items: Array<WishItem> = [
    new WishItem('Master Angular'),
    new WishItem('Get Coffee', true),
  ];
  visibleItems: Array<WishItem> = this.items;
  newWishText = '';
  filterOptionSelected: String = '0';

  toggleIsComplete(item: WishItem) {
    item.isCompleted = !item.isCompleted;
  }

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.clearInputBox();
  }

  handleFilterChange(value: String) {
    switch (value) {
      case '0':
        this.visibleItems = this.items;
        break;
      case '1':
        this.visibleItems = this.items.filter((w) => !w.isCompleted);
        break;
      case '2':
        this.visibleItems = this.items.filter((w) => w.isCompleted);
        break;
    }
  }

  private clearInputBox() {
    this.newWishText = '';
  }
}
