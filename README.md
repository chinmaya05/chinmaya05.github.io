# Chinmaya Sahu – Portfolio (Angular)

Single-page portfolio built with Angular (standalone components, signals, SCSS).

## Run it

```bash
npm install
npm start          # opens http://localhost:4200
npm run build      # production build in dist/portfolio/browser
```

Needs Node.js 20 or newer.

## Add your photo

Save it as `public/images/profile.jpg`. Until then a "CS" placeholder is shown.

## Edit your content

Everything (name, rotating roles, projects, skills, links) is in
`src/app/data/portfolio.data.ts`.

- Rotating title in the hero: the `roles` array.
- GitHub button: set `github` to your profile URL (hidden while empty).
- Resume button: uses `public/Chinmaya_Software_Engineering.pdf`.

## Project structure

Every component has its own folder with three files: `.ts` (logic), `.html` (template) and `.scss` (styles).

```
src/app/
  app.component.ts / .html / .scss
  components/
    navbar/      navbar.component.ts / .html / .scss
    hero/        hero.component.ts / .html / .scss     (typing role animation + photo)
    about/  experience/  projects/  skills/  education/  contact/  footer/  icon/
  directives/    reveal (fade-in on scroll), spotlight (mouse glow), tilt (3D photo tilt)
  services/      scroll.service.ts (smooth scroll, nav highlight, progress bar)
  data/          portfolio.data.ts (all your content)
src/styles.scss  global colors, buttons, chips, cards
```

## Debugging with the console

Open the browser DevTools console (F12). Every log starts with a tag so you can filter, e.g. type `[Hero]` in the console filter box:

`[Main]` `[App]` `[Navbar]` `[Hero]` `[About]` `[Experience]` `[Projects]` `[Skills]` `[Education]` `[Contact]` `[Footer]` `[ScrollService]` `[Reveal]` `[Spotlight]` `[Tilt]`

Useful ones: `[ScrollService] active section: ...` shows the nav highlight changing, `[Hero] profile photo NOT found` tells you the photo path is wrong, and `[Hero] typing role ...` shows the rotating title.
To remove the logs later, search the project for `console.log` and delete those lines.

## Deploy

Upload the contents of `dist/portfolio/browser` to Netlify, Vercel, GitHub Pages or any static host.
