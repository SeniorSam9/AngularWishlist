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

  // this value is intended to be changed by the child
  filter = () => {};

  get visibleItems(): Array<WishItem> {
    return this.items.filter(this.filter);
  }
}
