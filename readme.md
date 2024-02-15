# Vite, express, TypeScript, async SSR, slightly messy POC

- Vite and express project.
- A few basic pages.
- Server Rendered (SSR).
- Each page fetches data async during server rendering. The response data is embedded in the page before being served up to the browser.
- The browser takes over once the page is rendered (no React, just vanilla TS).
- Has middleware to fake block access to page @ /two.

### @kitajs/html

- Added @kitajs/html for JSX markup.
- Implementing in one.tsx
