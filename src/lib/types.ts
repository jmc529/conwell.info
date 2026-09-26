/**
 * An inline run of text, optionally wrapped in a link. Used instead of raw HTML
 * so content can carry links without needing `{@html}`.
 */
export type Segment = { text: string; href?: string };
