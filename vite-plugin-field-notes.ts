import { readFile } from 'node:fs/promises';
import type { Plugin } from 'vite';

const MODULE_ID = 'virtual:field-notes';
const RESOLVED_ID = `\0${MODULE_ID}`;

/** How many posts the homepage's Field Notes list shows. */
const LATEST_POSTS = 6;

const CARD = /<a class="(?:note-card[^"]*|archive-card)" href="posts\/([^"]+)">([\s\S]*?)<\/a>/g;

const NAMED_ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
};

function toText(html: string): string {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&(?:#(\d+)|#x([\da-f]+)|(amp|lt|gt|quot|apos));/gi, (_, decimal, hex, name) =>
      decimal || hex
        ? String.fromCodePoint(decimal ? Number(decimal) : parseInt(hex, 16))
        : NAMED_ENTITIES[name.toLowerCase()],
    )
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Reads the post cards in blog/index.html, the one list every post has to be
 * added to, so publishing a post there also updates the homepage. A card this
 * can't read fails the build instead of quietly dropping off the homepage.
 */
export function parseFieldNotes(blogIndexHtml: string) {
  const posts = [...blogIndexHtml.matchAll(CARD)].map(([, path, card]) => {
    const meta =
      /class="note-meta">([\s\S]*?)<\/p>/.exec(card)?.[1].split(' · ') ??
      [...card.matchAll(/<span>([\s\S]*?)<\/span>/g)].map((match) => match[1]);
    const title = /<h3[^>]*>([\s\S]*?)<\/h3>/.exec(card)?.[1];
    const excerpt =
      /class="note-excerpt">([\s\S]*?)<\/p>/.exec(card)?.[1] ?? /<p>([\s\S]*?)<\/p>/.exec(card)?.[1];
    const date = toText(meta[0] ?? '');
    const time = Date.parse(date);

    if (Number.isNaN(time) || !meta[1] || !title || !excerpt) {
      throw new Error(`Field Notes: can't read the blog/index.html card for posts/${path}`);
    }

    return {
      time,
      note: {
        date,
        category: toText(meta[1]),
        title: toText(title),
        excerpt: toText(excerpt),
        href: `/blog/posts/${path}`,
      },
    };
  });

  if (posts.length === 0) {
    throw new Error('Field Notes: found no post cards in blog/index.html');
  }

  const newestFirst = posts.sort((a, b) => b.time - a.time);
  const years = newestFirst.map((post) => new Date(post.time).getFullYear());

  return {
    notes: newestFirst.slice(0, LATEST_POSTS).map((post) => post.note),
    postCount: posts.length,
    yearRange: `${Math.min(...years)}–${Math.max(...years)}`,
  };
}

export function fieldNotes(blogIndexPath: string): Plugin {
  return {
    name: 'field-notes',
    resolveId: (id) => (id === MODULE_ID ? RESOLVED_ID : undefined),
    async load(id) {
      if (id !== RESOLVED_ID) return undefined;
      this.addWatchFile(blogIndexPath);
      const { notes, postCount, yearRange } = parseFieldNotes(await readFile(blogIndexPath, 'utf8'));
      return [
        `export const notes = ${JSON.stringify(notes)};`,
        `export const postCount = ${postCount};`,
        `export const yearRange = ${JSON.stringify(yearRange)};`,
      ].join('\n');
    },
  };
}
