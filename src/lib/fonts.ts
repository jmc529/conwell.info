/**
 * Font loading is deliberately explicit rather than pulling in each package's
 * `index.css`. Those entry points register every unicode subset (cyrillic,
 * greek, vietnamese, symbols) and every weight, which added ~160 `@font-face`
 * rules and 45 font files to the build for a site that only ever renders
 * English. This site is latin-only and uses three weights:
 *
 *   400 - body copy
 *   500 - chota sets this on every heading (h1-h6)
 *   700 - chota sets `bold` on `dl dt`, and Experience.svelte on `.role`
 *
 * Adding a weight or a family means adding it here too.
 */
import '@fontsource/fira-code/latin-400.css';
import '@fontsource/fira-code/latin-500.css';
import '@fontsource/fira-code/latin-700.css';
import '@fontsource/comfortaa/latin-400.css';
import '@fontsource/comfortaa/latin-500.css';
import '@fontsource/comfortaa/latin-700.css';
import '@fontsource/fira-mono/latin-400.css';
import '@fontsource/fira-mono/latin-500.css';
import '@fontsource/fira-mono/latin-700.css';
import '@fontsource/inconsolata/latin-400.css';
import '@fontsource/inconsolata/latin-500.css';
import '@fontsource/inconsolata/latin-700.css';
