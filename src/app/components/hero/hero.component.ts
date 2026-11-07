import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';
import { TiltDirective } from '../../directives/tilt.directive';
import { ScrollService } from '../../services/scroll.service';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [IconComponent, RevealDirective, TiltDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  private readonly scroll = inject(ScrollService);
  readonly p = PROFILE;
  readonly typed = signal('');
  readonly failed = signal(false);

  private roleIndex = 0;
  private charCount = 0;
  private deleting = false;
  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    console.log('[Hero] init, rotating roles:', this.p.roles, '| photo path:', this.p.photo);
    this.timer = setTimeout(() => this.tick(), 600);
  }

  ngOnDestroy(): void {
    console.log('[Hero] destroyed, typing timer cleared');
    clearTimeout(this.timer);
  }

  go(event: Event, id: string): void {
    console.log(`[Hero] button clicked -> "${id}"`);
    event.preventDefault();
    this.scroll.scrollTo(id);
  }

  onImageLoad(): void {
    console.log('[Hero] profile photo loaded:', this.p.photo);
  }

  onImageError(): void {
    console.log('[Hero] profile photo NOT found at:', this.p.photo, '-> showing placeholder. Add your picture at public/' + this.p.photo);
    this.failed.set(true);
  }

  private tick(): void {
    const full = this.p.roles[this.roleIndex];
    if (!this.deleting && this.charCount === 0) {
      console.log(`[Hero] typing role ${this.roleIndex + 1}/${this.p.roles.length}: "${full}"`);
    }

    if (!this.deleting) {
      this.charCount++;
      this.typed.set(full.slice(0, this.charCount));
      if (this.charCount === full.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.tick(), 1700); // pause on the finished role
        return;
      }
      this.timer = setTimeout(() => this.tick(), 70);
    } else {
      this.charCount--;
      this.typed.set(full.slice(0, this.charCount));
      if (this.charCount === 0) {
        this.deleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.p.roles.length;
        this.timer = setTimeout(() => this.tick(), 350);
        return;
      }
      this.timer = setTimeout(() => this.tick(), 35);
    }
  }
}
