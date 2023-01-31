import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tag-select-places',
  templateUrl: './tag-select-places.component.html',
  styleUrls: ['./tag-select-places.component.scss'],
})
export class TagSelectPlacesComponent {
  toppingsControl = new FormControl([]);
  toppingList: String[] = [
    'Colombia',
    'Barranquilla',
    'Medellin',
    'Bogotá',
    'Cali',
  ];

  onToppingRemoved(topping: String) {
    const toppings = this.toppingsControl.value as any;
    this.removeFirst(toppings, topping);
    this.toppingsControl.setValue(toppings); // To trigger change detection
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
}
