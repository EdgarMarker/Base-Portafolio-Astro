import type { Block, Image, SEO } from "./_globals";

export interface ContactPage {
  seo: SEO;
  hero: {
    string_h1: string;
    block_info: Block[];
    string_btn: string;
    img_hero: Image;
  };
}
