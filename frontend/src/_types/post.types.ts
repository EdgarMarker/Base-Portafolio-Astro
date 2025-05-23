import type { Block, Image, SEO, SLUG } from "./_globals";

export interface PostAuthor {
  string_name: string;
  slug: SLUG;
  text_bio: string;
  img_author: Image;
}

export interface PostCategory {
  seo: SEO;
  category: {
    string_title: string;
    slug: SLUG;
  };
}
export interface PostDetail {
  general: {
    slug: SLUG;
    string_title: string;
    dateTime_publishedAt: string;
    arrRef_category: PostCategory[];
    ref_author: PostAuthor;
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
