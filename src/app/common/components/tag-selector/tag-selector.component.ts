import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, Input} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Category {
  name: string;
}

@Component({
  selector: 'app-tag-selector',
  templateUrl: './tag-selector.component.html',
  styleUrls: ['./tag-selector.component.scss'],
})
export class TagSelectorComponent {

  @Input() label: String = 'Escrbe una categoría que prefieras para tu campaña.';
  @Input() placeholder: String = 'Placeholder';
  @Input() p: String = 'Categorías'
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  category: Category[] = [{name: 'Tecnologia'}, {name: 'Blockchain'}, {name: 'Crypto'} ];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our category
    if (value) {
      this.category.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(category: Category): void {
    const index = this.category.indexOf(category);

    if (index >= 0) {
      this.category.splice(index, 1);
    }
  }
}
