import { Component, OnInit } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { SpotlightDirective } from '../../directives/spotlight.directive';
import { EDUCATION } from '../../data/portfolio.data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RevealDirective, SpotlightDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent implements OnInit {
  readonly items = EDUCATION;

  ngOnInit(): void {
    console.log('[Education] init, entries:', this.items.length);
  }
}
