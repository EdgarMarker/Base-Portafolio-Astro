import type { Block, Image, SEO } from "./_globals";

export interface AboutPage {
  seo: SEO;
  hero: {
    string_h1: string;
    block_info: Block[];
    string_btn: string;
    img_hero: Image;
  };
  intro: {
    string_h3: string;
    block_info: Block[];
    string_btn: string;
    img_1: Image;
    img_2: Image;
  };
}
