import { Component, OnInit } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';
import { SpotlightDirective } from '../../directives/spotlight.directive';
import { ABOUT, PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [IconComponent, RevealDirective, SpotlightDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  readonly about = ABOUT;
  readonly p = PROFILE;

  ngOnInit(): void {
    console.log('[About] init, domains:', this.about.domains.length, '| stats:', this.about.stats.length);
  }
}
