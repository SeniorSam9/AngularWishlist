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
  filterOptionSelected: String = '0';

  get visibleItems(): Array<WishItem> {
    let filterNumber = this.filterOptionSelected;
    switch (filterNumber) {
      case '0':
        return this.items;
      case '1':
        return this.items.filter((w) => !w.isCompleted);
      case '2':
        return this.items.filter((w) => w.isCompleted);
      default:
        return new Array<WishItem>();
    }
  }
}
