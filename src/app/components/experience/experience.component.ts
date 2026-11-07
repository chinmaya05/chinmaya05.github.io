import { Component, OnInit } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';
import { SpotlightDirective } from '../../directives/spotlight.directive';
import { EXPERIENCE } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [IconComponent, RevealDirective, SpotlightDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnInit {
  readonly jobs = EXPERIENCE;

  ngOnInit(): void {
    console.log('[Experience] init, jobs:', this.jobs.length);
  }
}
