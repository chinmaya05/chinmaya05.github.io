import { Component, OnInit } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { SpotlightDirective } from '../../directives/spotlight.directive';
import { MARQUEE, SKILL_GROUPS } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective, SpotlightDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  readonly groups = SKILL_GROUPS;
  // The list is doubled so the scrolling strip loops without a visible jump.
  readonly loop = [...MARQUEE, ...MARQUEE];

  ngOnInit(): void {
    console.log('[Skills] init, groups:', this.groups.length, '| marquee items (doubled for loop):', this.loop.length);
  }
}
