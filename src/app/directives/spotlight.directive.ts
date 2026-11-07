import { Directive, ElementRef, HostListener, inject } from '@angular/core';

/** Makes a soft glow follow the mouse inside a card (used with the .card class). */
@Directive({ selector: '[spotlight]', standalone: true })
export class SpotlightDirective {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private logged = false;

  @HostListener('mousemove', ['$event'])
  onMove(e: MouseEvent): void {
    const el = this.host.nativeElement;
    if (!this.logged) {
      // logged once per element, mousemove fires too often to log every time
      console.log(`[Spotlight] first hover on <${el.tagName.toLowerCase()}> class="${el.className}"`);
      this.logged = true;
    }
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  }
}
