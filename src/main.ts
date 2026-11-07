import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

console.log('[Main] Bootstrapping Angular application...');

bootstrapApplication(AppComponent, appConfig)
  .then(() => console.log('[Main] Application bootstrapped successfully'))
  .catch((err) => console.error('[Main] Bootstrap failed:', err));
