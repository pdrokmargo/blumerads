import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-select-ages',
  templateUrl: './select-ages.component.html',
  styleUrls: ['./select-ages.component.scss']
})
export class SelectAgesComponent implements OnInit {
  @Input() label: String = '';
  @Input() from: string[] = [];
  @Input() to: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
