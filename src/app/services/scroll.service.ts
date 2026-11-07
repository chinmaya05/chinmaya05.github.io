import { Injectable, signal } from '@angular/core';

/**
 * Handles smooth navigation between sections and "scroll spy":
 * the active nav link follows whichever section is on screen.
 */
@Injectable({ providedIn: 'root' })
export class ScrollService {
  readonly active = signal('home');
  readonly progress = signal(0);
  readonly scrolled = signal(false);
  readonly showTop = signal(false);

  private ids: string[] = [];
  private locked = false;
  private lockTimer?: ReturnType<typeof setTimeout>;
  private ticking = false;

  private readonly onScroll = () => {
    if (this.ticking) return;
    this.ticking = true;
    requestAnimationFrame(() => {
      this.ticking = false;
      this.update();
    });
  };
  private readonly onScrollEnd = () => this.unlock();

  init(ids: string[]): void {
    console.log('[ScrollService] init, tracking sections:', ids);
    this.ids = ids;
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onScroll, { passive: true });
    window.addEventListener('scrollend', this.onScrollEnd);
    this.update();

    // Opening the site with #projects etc. in the URL scrolls there smoothly.
    const hash = window.location.hash.replace('#', '');
    if (hash && ids.includes(hash)) {
      console.log('[ScrollService] Opened with URL hash, will scroll to:', hash);
      setTimeout(() => this.scrollTo(hash), 350);
    }
  }

  destroy(): void {
    console.log('[ScrollService] destroy, removing window listeners');
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onScroll);
    window.removeEventListener('scrollend', this.onScrollEnd);
    clearTimeout(this.lockTimer);
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (!el) {
      console.log(`[ScrollService] scrollTo("${id}") failed: no element with that id`);
      return;
    }
    console.log(`[ScrollService] scrollTo("${id}") from scrollY=${Math.round(window.scrollY)}, target top=${Math.round(el.getBoundingClientRect().top)}`);

    // Highlight the target link straight away and ignore the spy while the
    // page glides there, so the highlight does not flicker through sections.
    this.active.set(id);
    this.locked = true;
    clearTimeout(this.lockTimer);
    this.lockTimer = setTimeout(() => this.unlock(), 1500);

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', id === 'home' ? window.location.pathname : `#${id}`);
  }

  private unlock(): void {
    if (this.locked) console.log('[ScrollService] smooth scroll finished, scroll spy unlocked');
    this.locked = false;
    clearTimeout(this.lockTimer);
    this.update();
  }

  private update(): void {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.progress.set(max > 0 ? Math.min(1, y / max) : 0);
    this.scrolled.set(y > 20);
    this.showTop.set(y > 600);

    if (this.locked || this.ids.length === 0) return;

    const line = window.innerHeight * 0.35;
    let current = this.ids[0];
    for (const id of this.ids) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= line) current = id;
    }
    // At the very bottom, the last section should win even if it is short.
    if (y + window.innerHeight >= document.documentElement.scrollHeight - 4) {
      current = this.ids[this.ids.length - 1];
    }
    const previous = this.active();
    this.active.set(current);
    if (previous !== current) {
      console.log(`[ScrollService] active section: ${previous} -> ${current} (scrollY=${Math.round(y)})`);
    }
  }
}
