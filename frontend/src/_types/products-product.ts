import type { BlockContent, Category, Img, Slug } from "./_globals";

export interface Product {
  titleseo: string;
  descseo: string;
  keyseo: string;
  title: string;
  slug: Slug;
  body: BlockContent[];
  publishedAt: any | Date;
  mainImage: Img;
  categories: Category[];
}
