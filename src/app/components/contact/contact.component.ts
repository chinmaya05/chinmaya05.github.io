import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../icon/icon.component';
import { RevealDirective } from '../../directives/reveal.directive';
import { SpotlightDirective } from '../../directives/spotlight.directive';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, IconComponent, RevealDirective, SpotlightDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  readonly p = PROFILE;
  readonly sent = signal(false);
  name = '';
  email = '';
  message = '';

  /** No backend needed: opens the visitor's mail app with the message filled in. */
  ngOnInit(): void {
    console.log('[Contact] init, messages go to:', this.p.email);
  }

  send(): void {
    console.log('[Contact] form submitted:', { name: this.name, email: this.email, messageLength: this.message.length });
    const subject = encodeURIComponent(`Portfolio message from ${this.name}`);
    const body = encodeURIComponent(`${this.message}\n\n— ${this.name} (${this.email})`);
    this.sent.set(true);
    const mailto = `mailto:${this.p.email}?subject=${subject}&body=${body}`;
    console.log('[Contact] opening mail app, mailto length:', mailto.length);
    window.location.href = mailto;
    setTimeout(() => this.sent.set(false), 3000);
  }
}
