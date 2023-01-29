import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tagselectorlugares',
  templateUrl: './tagselectorlugares.component.html',
  styleUrls: ['./tagselectorlugares.component.scss'],
})
export class TagselectorlugaresComponent {
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
