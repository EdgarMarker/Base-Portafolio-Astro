import type { Block, Image, SEO, SLUG } from "./_globals";

export interface ProductCategory {
  seo: SEO;
  category: {
    string_title: string;
    slug: SLUG;
  };
}

export interface ProductDetail {
  general: {
    slug: SLUG;
    string_title: string;
    dateTime_publishedAt: string;
    arrRef_category: ProductCategory[];
    ref_author?: {
      string_name: string;
      slug: SLUG;
    };
  };
  card: {
    text_excerpt: string;
    img_card: Image;
  };
  seo: SEO;
  page: {
    hero: {
      string_h1: string;
      block_info: Block[];
      string_btn: string;
      img_hero: Image;
    };
  };
}
