import { Component, Input } from '@angular/core';

/** Small set of inline SVG icons (Feather style). Usage: <app-icon name="mail" /> */
@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input() name = '';
}
