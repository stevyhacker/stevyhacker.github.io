/// <reference types="vite/client" />

declare module 'virtual:field-notes' {
  export const notes: readonly {
    date: string;
    category: string;
    title: string;
    excerpt: string;
    href: string;
  }[];
  export const postCount: number;
  export const yearRange: string;
}
