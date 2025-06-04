import type { Image, Block, SEO, SLUG } from "./_globals";
import type { ProductDetail } from "./product.types";
import type { Testimonials } from "./testimonial.types";

export interface HomeHero {
  string_h1: string;
  block_info: Block[];
  string_btn: string;
  img_bg: Image;
}

export interface HomeIntro {
  string_h3: string;
  block_info: Block[];
  string_btn: string;
  img_1: Image;
  img_2: Image;
}

export interface HomeRecentProducts {
  arrRef_products: ProductDetail[];
}

export interface HomeTestimonials {
  arrRef_testimonials: Testimonials[];
}

export interface HomePage {
  seo: SEO;
  hero: HomeHero;
  intro: HomeIntro;
  rProducts: HomeRecentProducts;
  testimonials: HomeTestimonials;
}


