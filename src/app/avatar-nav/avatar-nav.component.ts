import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-nav',
  template: `
    <div class="avatar">
      <img [src]="imageUrl" alt="avatar">
      <span class="status-indicator"></span>
    </div>
  `,
  styleUrls: ['./avatar-nav.component.scss']
})
export class AvatarNavComponent {
  @Input() imageUrl: string;
}
