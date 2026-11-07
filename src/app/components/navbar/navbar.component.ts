import { Component, HostListener, OnInit, inject, signal } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { ScrollService } from '../../services/scroll.service';
import { PROFILE, SECTIONS } from '../../data/portfolio.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  readonly scroll = inject(ScrollService);
  readonly sections = SECTIONS;
  readonly profile = PROFILE;
  readonly open = signal(false);

  ngOnInit(): void {
    console.log('[Navbar] init, links:', this.sections.map((s) => s.id));
  }

  toggleMenu(): void {
    this.open.set(!this.open());
    console.log('[Navbar] mobile menu', this.open() ? 'opened' : 'closed');
  }

  go(event: Event, id: string): void {
    console.log(`[Navbar] link clicked -> "${id}"`);
    event.preventDefault();
    this.open.set(false);
    this.scroll.scrollTo(id);
  }

  @HostListener('document:keydown.escape')
  closeMenu(): void {
    if (this.open()) console.log('[Navbar] Escape pressed, closing mobile menu');
    this.open.set(false);
  }
}
