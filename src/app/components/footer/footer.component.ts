import { Component, OnInit, inject } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  readonly scroll = inject(ScrollService);
  readonly year = new Date().getFullYear();

  ngOnInit(): void {
    console.log('[Footer] init, year:', this.year);
  }
}
