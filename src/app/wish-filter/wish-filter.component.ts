import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { WishItem } from '../../shared/models/WishItem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isCompleted,
  (item: WishItem) => item.isCompleted,
];

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css',
})
export class WishFilterComponent implements OnInit {
  // at first: the filter is "All"
  ngOnInit(): void {
    this.filterEvent.emit(filters[0]);
  }

  @Output() filterEvent = new EventEmitter<any>();

  filterOptionSelected: String = '0';

  changeSelectedFilter(value: any) {
    // the argument of emit() is $event
    this.filterEvent.emit(filters[value]);
  }
}
