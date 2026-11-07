import { AfterViewInit, Component, OnDestroy, inject } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { IconComponent } from './components/icon/icon.component';
import { ScrollService } from './services/scroll.service';
import { SECTIONS } from './data/portfolio.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent, HeroComponent, AboutComponent, ExperienceComponent, ProjectsComponent,
    SkillsComponent, EducationComponent, ContactComponent, FooterComponent, IconComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit, OnDestroy {
  readonly scroll = inject(ScrollService);

  ngAfterViewInit(): void {
    console.log('[App] View ready, starting scroll service for sections:', SECTIONS.map((s) => s.id));
    this.scroll.init(SECTIONS.map((s) => s.id));
  }

  ngOnDestroy(): void {
    console.log('[App] Destroyed, stopping scroll service');
    this.scroll.destroy();
  }
}
