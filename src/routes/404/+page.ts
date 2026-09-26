// Cloudflare Pages serves `build/404.html` for any unmatched path, so the URL the
// browser actually requests (`/some/typo`) is not `/404`. Without `csr = false`
// the client-side router would hydrate, fail to match that path, and immediately
// replace this prerendered markup with SvelteKit's built-in error page.
export const prerender = true;
export const csr = false;
