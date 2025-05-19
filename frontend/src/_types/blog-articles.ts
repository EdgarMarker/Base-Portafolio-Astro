import type { Author, BlockContent, Category, Img, Slug } from "./_globals";

export interface Articles {
  titleseo: string;
  descseo: string;
  keyseo: string;
  title: string;
  slug: Slug;
  excerpt: string;
  mainImage: Img;
  body: BlockContent[];

  publishedAt: string;
  categories: Category[];
  author: Author;
}
