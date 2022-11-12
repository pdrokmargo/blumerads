import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent {
    @Input() value: string = '';
    @Input() icon: string = '';
    @Input() description: string = '';
    @HostBinding('class') class = 'card h-100';
  
    constructor() {}

}
