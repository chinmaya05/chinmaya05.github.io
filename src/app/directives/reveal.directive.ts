import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';

/** Fades and slides an element in the first time it scrolls into view. */
@Directive({ selector: '[reveal]', standalone: true })
export class RevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const el = this.host.nativeElement;
    el.classList.add('reveal');
    el.style.transitionDelay = `${this.revealDelay}ms`;

    if (typeof IntersectionObserver === 'undefined') {
      console.log('[Reveal] IntersectionObserver not supported, showing element immediately');
      el.classList.add('in');
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            console.log(`[Reveal] in view: <${el.tagName.toLowerCase()}> class="${el.className}" delay=${this.revealDelay}ms`);
            el.classList.add('in');
            this.observer?.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
