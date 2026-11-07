import { Directive, ElementRef, HostListener, inject } from '@angular/core';

/** Gentle 3D tilt that follows the mouse. Used on the profile photo. */
@Directive({ selector: '[tilt]', standalone: true })
export class TiltDirective {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private tilting = false;

  @HostListener('mousemove', ['$event'])
  onMove(e: MouseEvent): void {
    const el = this.host.nativeElement;
    if (!this.tilting) {
      console.log('[Tilt] mouse entered, tilt started');
      this.tilting = true;
    }
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transition = 'transform .1s ease-out';
    el.style.transform = `perspective(900px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg) scale(1.02)`;
  }

  @HostListener('mouseleave')
  onLeave(): void {
    console.log('[Tilt] mouse left, tilt reset');
    this.tilting = false;
    const el = this.host.nativeElement;
    el.style.transition = 'transform .6s cubic-bezier(.2,.8,.2,1)';
    el.style.transform = '';
  }
}
