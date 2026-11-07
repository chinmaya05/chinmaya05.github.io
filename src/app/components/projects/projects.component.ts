import { Component, OnInit } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';
import { SpotlightDirective } from '../../directives/spotlight.directive';
import { PROJECTS } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [IconComponent, RevealDirective, SpotlightDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  readonly projects = PROJECTS;

  ngOnInit(): void {
    console.log('[Projects] init, projects:', this.projects.map((x) => x.title));
  }
}
